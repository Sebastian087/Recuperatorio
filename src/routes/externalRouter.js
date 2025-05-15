import { Router } from "express";
import { ExternalController } from "../controller/external.controller.js";

export const externalRouter = Router();

externalRouter.get("/data_externa", ExternalController.getExternalCSV);
