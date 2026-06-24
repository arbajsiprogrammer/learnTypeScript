// import express from "express";
import {Router} from "express";
import { addBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/book.controller";

// const router = express.Router();
const router = Router();

router.post("/", addBook)

router.get("/", getBooks)

router.get("/:bookId", getBookById)

router.put("/:bookId", updateBook)

router.delete("/:bookId", deleteBook)

export default router;