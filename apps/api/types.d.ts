declare namespace Express {
  interface Request {
    userId?: string;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: number;
  }
}
