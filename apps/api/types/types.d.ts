declare namespace Express {
  interface Request {
    userId?: string;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    CLERK_WEBHOOK_SIGNING_SECRET: string;
    NODE_ENV: "development" | "production";
    PORT: number;
  }
}
