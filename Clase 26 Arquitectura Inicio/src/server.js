import express from 'express'
import userRouter from './router/user.router.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080;

mongoose.set('strictQuery',false)

const DB = 'mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/ArquiCapas?retryWrites=true&w=majority'

mongoose.connect( DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const conexion = mongoose.connection

conexion.on('connect',()=>{
    console.log('DB Connnect')
})

conexion.on('error',()=>{
    console.log('Error Connnect')
})
app.use(express.json())
app.use( express.urlencoded({extended: true}))
app.use('/api/user',userRouter.getRouter())

app.use('/',(req,res)=>{
    res.send('Hola estamos probando')
})
app.listen (PORT,()=>{
    console.log('\x1b[36m  Server Up ...')
})