import { userModel } from "../models/users.js";

export default class Users{
    constructor(){
        console.log("Trabajando con Mongo")
    }
    getAll=async()=>{
    //    let users =await userModel.find();
    //    return users.map(user=>users.toObject())

        let users =await userModel.find().lean();
        return users
    }

    saveUser=async(user)=>{
        let result =await userModel.create(user);
        return result;
    }
     getById= async(param)=>{
        let result  = await userModel.findOne(param).populate('courses').lean()
        return result
     }

     updateUser= async(id,user)=>{
        delete user._id
        let result = await userModel.updateOne({_id:id},{$set:user})
        return result
     }
}