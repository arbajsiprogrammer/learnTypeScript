
import { Request, Response } from "express";
import { successResponse } from "../utils/response.util";
import { getBooksService } from "../services/book.service";


const getBooks = async(req:Request, res:Response)=>{
    try {
        
        const books =await getBooksService();
        return successResponse(res, 200, "data fetched", books)
    } catch (error : any) {
        console.log(error);
        return res.status(500).json({message:error.message});
    }
    
}