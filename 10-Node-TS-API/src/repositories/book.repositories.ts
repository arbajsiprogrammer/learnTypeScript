import { Book } from "../models/book.model"

const find = async()=>{
    const response = await Book.find();
    return response;
}

export{find}