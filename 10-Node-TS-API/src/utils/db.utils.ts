import mongoose from "mongoose"

const connectDb:() => Promise<void> = async() =>{
    const URI = process.env.MONGO_URI as string;
    try {
        await mongoose.connect(URI);
        console.log("DB connected!!");
    } catch (error : any) {
        console.log(`Error at connecting to DB ${error.message}`);
        process.exit(1);
    }
}

export {connectDb}