import express from "express";
import cors from "cors";
import { apiRoutes } from "./routes/api.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);

export { app };
