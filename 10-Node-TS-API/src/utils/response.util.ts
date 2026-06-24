import { Response } from "express";
import { ApiResponse } from "./ApiResponse";

const successResponse =(res : Response, statusCode:number,message:string, data:any ):Response  => {
return res
    .status(statusCode)
    .json(new ApiResponse(statusCode, message, data));

}


const errorResponse = (res:Response, statusCode :number, error:any):Response => {
  
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: error.message || error,
    data: null,
  });
};

export { successResponse, errorResponse };