// import express from "express";
import {Router} from "express";
import { addBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/book.controller";

// const router = express.Router();
const router = Router();

router.get("/books", getBooks)

router.get("/books/:bookId", getBookById)

router.put("/books", updateBook)

router.post("/books", addBook)

router.delete("/books", deleteBook)


export default router;