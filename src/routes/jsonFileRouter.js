import { Router } from "express";
import { JsonFileController } from "../controller/jsonFile.controller.js";

export const jsonFileRouter = Router();

jsonFileRouter.get("/json_file", JsonFileController.getAll);
