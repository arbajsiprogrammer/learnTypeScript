
import { Request, Response } from "express";
import { successResponse,ISuccessResponse } from "../utils/response.util";
import { addBookService, deleteBookService, getBookByIdService, getBooksService, updateBookService } from "../services/book.service";
import { AsyncHandler } from "../utils/AsyncHandler.utils";
import { IBook } from "../models/book.model";


const getBooks = AsyncHandler(async(req:Request, res:Response)=>{
    const books =await getBooksService();

    const response : ISuccessResponse = {res, statusCode:200, message:"books fetched", data: books}

    return successResponse(response);    
})

const getBookById = AsyncHandler(async(req:Request, res:Response)=>{
    const id = req.params.bookId as string;

    const book =await getBookByIdService(id);

    const response : ISuccessResponse = {res, statusCode:200, message:"book fetched", data: book}

    return successResponse(response);    
})

const addBook = AsyncHandler(async (req:Request, res:Response) => {

    const body : Partial<IBook> = req.body;

    const book = await addBookService(body);

    const response : ISuccessResponse = {res, statusCode:201, message:"book created", data: book}

    return successResponse(response);    
})

const updateBook = AsyncHandler(async(req:Request, res:Response)=>{

    const body : Partial<IBook> = req.body;
    const id = req.params.bookId as string;

    const book = await updateBookService(id,body);

    const response : ISuccessResponse = {res, statusCode:200, message:"book updated", data: book}

    return successResponse(response);    
})

const deleteBook = AsyncHandler(async(req:Request, res:Response)=>{
    const id = req.params.bookId as string;

    const book =await deleteBookService(id);

    const response : ISuccessResponse = {res, statusCode:200, message:"book deleted", data: book}

    return successResponse(response);    
})
export {getBooks, getBookById, addBook, updateBook, deleteBook}