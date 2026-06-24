
import { Request, Response } from "express";
import { successResponse } from "../utils/response.util";
import { getBooksService } from "../services/book.service";
import { AsyncHandler } from "../utils/AsyncHandler.utils";


const getBooks = AsyncHandler(async(req:Request, res:Response)=>{
    const books =await getBooksService();
    return successResponse(res, 200, "data fetched", books);    
})