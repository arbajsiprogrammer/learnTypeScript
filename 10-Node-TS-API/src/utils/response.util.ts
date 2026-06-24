    import { Response } from "express";
    import { ApiResponse } from "./ApiResponse";
    import { ApiError } from "./ApiError";

    interface ISuccessResponse {
        res : Response;
        statusCode:number;
        message:string;
        data?:any 
    }

    const successResponse =(arg :ISuccessResponse ):Response  => {
        return arg.res
            .status(arg.statusCode)
            .json(new ApiResponse(arg.statusCode, arg.message, arg.data));

    }


    const errorResponse = (res:Response, statusCode :number, error:any):Response => {
    
        return res.status(statusCode).json({
            success: false,
            statusCode: statusCode,
            message: error.message || error,
            data: null,
        });
    };

    export { successResponse, errorResponse, ISuccessResponse };