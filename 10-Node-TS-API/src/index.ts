import {config} from "dotenv"
config();
import express, {Express, Request, Response} from "express";

import cors from "cors";
import { connectDb } from "./utils/db.utils";
import { errorMiddleware } from "./middleware/error.middleware";
import apiRouter from "./routes/index";
// instance of express
const app:Express = express();

// middlewares
app.use(cors())

// route mounting
app.use("/api/v1", apiRouter);

connectDb();
app.get("/", (req:Request, res:Response)=>{
    res.send("server is running");
})


// Global Error handler middleware
app.use(errorMiddleware)

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`)
}
)