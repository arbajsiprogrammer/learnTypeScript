
import { Model } from "mongoose";

const find = async <T> (Model:Model<T>)=>{
    const response = await Model.find();
    return response;
}

const findById = async <T>(Model:Model<T>, _id:string)=> {

    const response = await Model.findById(_id);
    return response;

}

const create = async <T>(Model:Model<T>, body: Partial<T> )=>{

    const response = await Model.create(body);
    return response;

}

const findByIdAndUpdate = async <T>(Model:Model<T>, body: Partial<T>,_id:string )=>{

    const response = await Model.findByIdAndUpdate(_id,body,{ new: true });
    return response;

}


const findByIdAndDelete = async <T>(Model:Model<T>,_id:string )=>{

    const response = await Model.findByIdAndDelete(_id);
    return response;

}


export{ find, findById, create, findByIdAndUpdate, findByIdAndDelete }