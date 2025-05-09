import express from "express";
import apiRouter from "@/routes/api";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`[SERVER] Listing On Port : ${PORT}`));
