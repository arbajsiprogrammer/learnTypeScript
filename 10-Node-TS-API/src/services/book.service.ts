
import { Book, IBook } from "../models/book.model";
import { create, find, findById } from "../repositories/common.repositories";

const getBooksService = async()=>{
    const books = await find(Book);
    return books;
}


const getBookByIdService = async(id:string)=>{
    const books = await findById(Book,id);
    return books;
}


const addBookService = async(body: Partial<IBook> )=>{
    const books = await create(Book,body);
    return books;
}


export{getBooksService,getBookByIdService,addBookService}