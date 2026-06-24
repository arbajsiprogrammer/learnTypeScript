import mongoose from "mongoose"
import { ApiError } from "./ApiError";

const connectDb:() => Promise<void> = async() =>{
    
    try {
        const URI = process.env.MONGO_URI;

        if(!URI){
            throw new ApiError(400, "URI undefined or null");
        }
        await mongoose.connect(URI);

        console.log("DB connected!!");
    } catch (error : any) {
        console.log(`Error at connecting to DB ${error.message}`);
        throw new ApiError(400, error.message);
       
    }
}

export {connectDb}