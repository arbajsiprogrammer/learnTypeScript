import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/response.util";
import { ApiError } from "../utils/ApiError";

const errorMiddleware = (error: any, req:Request, res:Response, next:NextFunction) => {
  if(!(error instanceof(ApiError))){

  return errorResponse(res, 500, "internal server Error");
  }
  
  return errorResponse(res, error.statusCode || 500, error);
};

export { errorMiddleware };
