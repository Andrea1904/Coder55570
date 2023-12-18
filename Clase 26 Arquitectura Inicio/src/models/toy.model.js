import mongoose from "mongoose";

const toyCollection = 'toys'

const toySchema= new mongoose.Schema({
    referencia: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: number,
        required: true,
        min : 0
    }
})

const toyModel = new mongoose.model(toyCollection,toySchema)

export default toyModel