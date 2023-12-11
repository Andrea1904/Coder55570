import mongoose from "mongoose";

const userCollection='users'

const userSchema= mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dni:Number,
    birthDate:Date,
    gender:
        {
            type:String,
            enum:["M","F"]
        },

    password: {
        type:String,
        required: true
    },
    role: {
        type: String,
        enum:['students','teacher'],
        default: 'students'
    },

    courses:{
        type:[
            {
            type: mongoose.SchemaTypes.ObjectId ,
            ref: 'courses'
            }
        ],
        default: []
    }
})

export const userModel=mongoose.model(userCollection,userSchema)
