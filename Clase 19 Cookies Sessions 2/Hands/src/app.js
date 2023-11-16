import express from 'express'
import session from 'express-session'
import cookieParse from 'cookie-parser'
import MongoStorage from 'connect-mongo'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

import viewRouter from './routes/views.router.js'
import sessionRouter from './routes/session.router.js'
const app = express()

const connection  =  mongoose.connect(
    'mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/Clase19Storage?retryWrites=true&w=majority',{
    useNewUrlParser :true , useUnifiedTopology: true
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.use(session({
    store:new MongoStorage({
        mongoUrl:'mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/Clase19Storage?retryWrites=true&w=majority',
        mongoOptions: {useNewUrlParser :true , useUnifiedTopology: true}
    }),
    secret: 'CoderSecret',
    resave: false,
    saveUninitialized: false
}))

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname +'/views')
app.set('view engine','handlebars')


app.use ('/',viewRouter)
app.use ('/api/sessions',sessionRouter)


app.listen( '8080',()=> console.log('Server Up'))