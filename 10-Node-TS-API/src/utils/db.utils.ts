import mongoose from "mongoose"
import { ApiError } from "./ApiError";

const connectDb:() => Promise<void> = async() =>{
    
    try {
        const URI = process.env.MONGO_URI;

        if(!URI){

            console.log("URI undefined or null");
            process.exit(1);

        }

        await mongoose.connect(URI);
        console.log("DB connected!!");

    } catch (error : any) {
        
        console.log(`Error at connecting to DB ${error.message}`);
        process.exit(1)
       
    }
}

export {connectDb}