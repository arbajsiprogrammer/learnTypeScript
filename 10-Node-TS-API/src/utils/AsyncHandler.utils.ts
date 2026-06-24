import { NextFunction, Request, Response } from "express"
import { FunctionDeclaration } from "typescript"

type RequestHandler = (req : Request, res :Response, next:NextFunction) => Promise<any>;


const AsyncHandler = (requestHandler :RequestHandler)=> 
    (req : Request, res :Response, next:NextFunction)=>{
   return Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
}

export {AsyncHandler};