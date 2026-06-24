
import { Request, Response } from "express";
import { successResponse,ISuccessResponse } from "../utils/response.util";
import { addBookService, getBookByIdService, getBooksService } from "../services/book.service";
import { AsyncHandler } from "../utils/AsyncHandler.utils";
import { IBook } from "../models/book.model";


const getBooks = AsyncHandler(async(req:Request, res:Response)=>{
    const books =await getBooksService();

    const response : ISuccessResponse = {res, statusCode:200, message:"data fetched", data: books}

    return successResponse(response);    
})

const getBookById = AsyncHandler(async(req:Request, res:Response)=>{
    const id = req.params.bookId;

    const books =await getBookByIdService(id);

    const response : ISuccessResponse = {res, statusCode:200, message:"data fetched", data: books}

    return successResponse(response);    
})

const addBook = AsyncHandler(async(req:Request, res:Response)=>{

    const body : Partial<IBook> = req.body;

    const books = await addBookService(body);

    const response : ISuccessResponse = {res, statusCode:200, message:"data fetched", data: books}

    return successResponse(response);    
})

export {getBooks, getBookById, addBook}