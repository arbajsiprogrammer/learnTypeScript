
import { Book, IBook } from "../models/book.model";
import { create, find, findById, findByIdAndDelete, findByIdAndUpdate } from "../repositories/common.repositories";
import { ApiError } from "../utils/ApiError";

const getBooksService = async()=>{
    const books = await find(Book);
    return books;
}


const getBookByIdService = async(id:string)=>{
    
    const book = await findById(Book,id);
    return book;
}


const addBookService = async(body: Partial<IBook> )=>{
    const book = await create(Book,body);
    return book;
}

const updateBookService = async(id:string, body: Partial<IBook> )=>{
    const book = await findByIdAndUpdate(Book,body, id);
    return book;
}

const deleteBookService = async(id:string)=>{
    const book = await findByIdAndDelete(Book, id);
    return book;
}

export{getBooksService, getBookByIdService, addBookService, updateBookService, deleteBookService}