import type { OutgoingMessage, SignupOutgoingMessage, ValidatorOutgoingMessage } from "@repo/common";
import { Keypair } from "@solana/web3.js";
import { signMessage } from "./utils";
import { randomUUIDv7 } from "bun";

const CALLBACKS: { [callbackId: string]: (data: SignupOutgoingMessage) => void } = {};
let validatorId: string | null = null;

async function main() {
  const keypair = Keypair.fromSecretKey(
    Uint8Array.from(
      JSON.parse(process.env.PRIVATE_KEY)
    )
  );

  const ws = new WebSocket(process.env.HUB_URL);

  ws.onmessage = async (event) => {
    const message: OutgoingMessage = JSON.parse(event.data);

    switch (message.type) {
      case "signup": {
        CALLBACKS[message.data.callbackId](message.data);
        delete CALLBACKS[message.data.callbackId];
        break;
      }

      case "validate": {
        await validateHandler(ws, message.data, keypair);
      }
    }
  }

  ws.onopen = async () => {
    const callbackId = randomUUIDv7();
    CALLBACKS[callbackId] = (data: SignupOutgoingMessage) => {
      validatorId = data.validatorId;
    }
    const signedMessage = await signMessage(`Signed message for ${callbackId}, ${keypair.publicKey}`, keypair);

    ws.send(JSON.stringify({
      type: 'signup',
      data: {
        callbackId,
        ip: await fetch('https://api.ipify.org').then(res => res.text()),
        publicKey: keypair.publicKey,
        signedMessage,
      },
    }));
  }
}

async function validateHandler(ws: WebSocket, { url, callbackId, websiteId }: ValidatorOutgoingMessage, keypair: Keypair) {
  console.log(`Validating ${url}`);
  const startTime = Date.now();
  const signature = await signMessage(`Replying to ${callbackId}`, keypair);

  try {
    const response = await fetch(url);
    const endTime = Date.now();
    const latency = endTime - startTime;
    const status = response.status;

    console.log(url);
    console.log(status);
    ws.send(JSON.stringify({
      type: 'validate',
      data: {
        callbackId,
        status: status === 200 ? 'Good' : 'Bad',
        latency,
        websiteId,
        validatorId,
        signedMessage: signature,
      },
    }));
  } catch (error) {
    ws.send(JSON.stringify({
      type: 'validate',
      data: {
        callbackId,
        status: 'Bad',
        latency: 1000,
        websiteId,
        validatorId,
        signedMessage: signature,
      },
    }));
    console.error(error);
  }
}

main();

setInterval(async () => {

}, 10000);
