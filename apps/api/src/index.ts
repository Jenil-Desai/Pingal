import express from "express";
import apiRouter from "@/routes/api";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`[SERVER] Listing On Port : ${PORT}`));
