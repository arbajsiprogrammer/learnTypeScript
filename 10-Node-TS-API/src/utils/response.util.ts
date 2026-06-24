import { Response } from "express";
import { ApiResponse } from "./ApiResponse";

const successResponse =(res : Response, statusCode:number,message:string, data:any ):Response  => {
return res
    .status(statusCode)
    .json(new ApiResponse(statusCode, message, data));

}

export {successResponse}