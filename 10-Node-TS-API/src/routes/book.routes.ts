// import express from "express";
import {Router} from "express";
import { getBooks } from "../controllers/book.controller";

// const router = express.Router();
const router = Router();

router.get("/books", getBooks)


export default router;