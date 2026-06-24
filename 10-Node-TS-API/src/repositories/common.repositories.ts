
import { Document, Model } from "mongoose";
import { IBook } from "../models/book.model";

const find = async <T > (modelName :Model<T>)=>{
    const response = await modelName.find();
    return response;
}

const findById = async <T >(modelName:Model<T>, _id:string)=>{
    const response = await modelName.findById(_id);
    return response;
}

const create = async <T>(modelName:Model<T>, body: Partial<T> )=>{

    const response = await modelName.create(body);
    return response;
}

const findByIdAndUpdate = async <T>(modelName:Model<T>, body: Partial<T>,_id:string )=>{

    const response = await modelName.findByIdAndUpdate(_id,body);
    return response;

}


const findByIdAndDelete = async <T>(modelName:Model<T>,_id:string )=>{

    const response = await modelName.findByIdAndDelete(_id);
    return response;

}


export{find, findById, create, findByIdAndUpdate, findByIdAndDelete}