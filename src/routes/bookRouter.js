import { Router } from "express";
import { BookController } from "../controller/book.controller.js";

export const bookRouter = Router();

bookRouter.get("/book/:id", BookController.bookValidation);
bookRouter.post("/book", BookController.bookCreateOne);
bookRouter.put("/book/:id", BookController.bookUpdateById);
bookRouter.delete("/book/:id", BookController.bookDeleteOne);
bookRouter.get("/book/", BookController.bookAll);
