import { userModel } from "../models/users.js";

export default class Users{
    constructor(){
        console.log("Trabajando con Mongo")
    }
    // get
    getAll=async()=>{
        let users =await userModel.find().populate('courses');
        return users.map(user=>user.toObject())
    }
    //create 
    saveUser=async(user)=>{
        let result =await userModel.create(user);
        return result;
    }
    //getBy
    getById= async(param)=>{
        let result =await userModel.findOne(param).populate('courses').lean();
        return result
    }
    updateUser =async(id,user)=>{
        delete user._id
        let result=await userModel.updateOne({_id:id},{$set:user})
        return result
    }

}