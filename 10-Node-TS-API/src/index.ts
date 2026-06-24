
import express, {Express, Request, Response} from "express";
import {config} from "dotenv"
config();
import cors from "cors";
import { connectDb } from "./utils/db.utils";

// instance of express
const app:Express = express();

// middlewares
app.use(cors())
connectDb();
app.get("/", (req:Request, res:Response)=>{
    res.send("server is running");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`)
}
)