import type { IncomingMessage, SignupIncomingMessage } from "@repo/common"
import { prismaClient } from "@repo/db/client";
import { randomUUIDv7, type ServerWebSocket } from "bun";
import { getLocationFromIp, verifyMessage } from "./utils";


const CALLBACKS: { [callbackId: string]: (data: IncomingMessage) => void } = {};
const AVAILABLE_VALIDATORS: { validadorId: string, ws: ServerWebSocket<unknown>, publicKey: string }[] = [];
const COAST_PER_VALIDATION = 100; // In Lamports

Bun.serve({
  port: 3002,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    async message(ws: ServerWebSocket<unknown>, message: string) {
      const data: IncomingMessage = JSON.parse(message);
      const type = data.type;

      switch (type) {
        case "signup": {
          const verfied = await verifyMessage(``, data.data.publicKey, data.data.signature);

          if (verfied) {
            await signupHandler(ws, data.data);
          }

          break;
        }

        case "validate": {
          CALLBACKS[data.data.callbackId](data);
          delete CALLBACKS[data.data.callbackId];
        }
      }
    }
  }
});

async function signupHandler(ws: ServerWebSocket<unknown>, data: SignupIncomingMessage) {
  const validator = await prismaClient.validator.findFirst({
    where: {
      publicKey: data.publicKey
    }
  });

  if (validator) {
    ws.send(JSON.stringify({
      type: "signup",
      data: {
        validatorId: validator.id,
        callbackId: data.callbackId
      }
    }));

    AVAILABLE_VALIDATORS.push({
      validadorId: validator.id,
      ws,
      publicKey: data.publicKey
    });
  } else {
    const location = await getLocationFromIp(data.ip);

    const validator = await prismaClient.validator.create({
      data: {
        publicKey: data.publicKey,
        ip: data.ip,
        location,
      }
    });

    ws.send(JSON.stringify({
      type: "signup",
      data: {
        validatorId: validator.id,
        callbackId: data.callbackId
      }
    }));

    AVAILABLE_VALIDATORS.push({
      validadorId: validator.id,
      ws,
      publicKey: data.publicKey
    });
  }
}

setInterval(async () => {
  const websites = await prismaClient.website.findMany({
    where: {
      disabled: false,
    }
  })

  for (const website of websites) {
    AVAILABLE_VALIDATORS.forEach(validator => {
      const callbackId = randomUUIDv7();
      validator.ws.send(JSON.stringify({
        type: "validate",
        data: {
          url: website.url,
          callbackId
        }
      }))

      CALLBACKS[callbackId] = async (data) => {
        if (data.type === "validate") {
          const { status, latency, websiteId, validatorId } = data.data;

          await prismaClient.$transaction(async (tx) => {
            await tx.websiteTick.create({
              data: {
                latency,
                status,
                websiteId,
                validatorId,
              }
            })

            await tx.validator.update({
              where: {
                id: validatorId,
              },
              data: {
                pendingPayment: { increment: COAST_PER_VALIDATION }
              }
            })
          })
        }
      }
    })
  }
}, 60 * 1000)
