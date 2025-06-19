import { Router } from "express";
import { CardController } from "../controller/card.controller.js";

export const cardRouter = Router();

cardRouter.get("/card/:email", CardController.cardByEmail);
cardRouter.post("/card", CardController.cardCreateOne);
cardRouter.put("/card/:id", CardController.cardUpdateById);
cardRouter.delete("/card/:id", CardController.cardDeleteOne);
cardRouter.get("/card/", CardController.cardAll);
