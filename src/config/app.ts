import express from "express";
import setupMiddelwares from "./middleware";
import setupRoutes from "./routes";
const app = express();

setupMiddelwares(app);
setupRoutes(app);

export default app;
