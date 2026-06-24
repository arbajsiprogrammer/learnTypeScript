import { find } from "../repositories/book.repositories";

const getBooksService = async()=>{
    const books = find();
    return books;
}

export{getBooksService}