import express from "express";
import {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/Book.js";
const router = express.Router();

router.route("/").post(addBook).get(getAllBooks);

router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

export default router;
