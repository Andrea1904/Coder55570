import express  from "express";
import __dirname from "./utils.js";

import viewRouter from './routes/views.router.js'
import coursesRouter from './routes/courses.router.js'
import usersRouter from './routes/users.router.js'
import sessionRouter from './routes/sessions.router.js'

import handlebars from 'express-handlebars'
import mongoose from "mongoose";

import passport from "passport";
import initializePassport from "./config/passport.config.js";
import cookieParser from 'cookie-parser'
import config from "./config/config.js";

const app =express();
const PORT=config.mongo.PORT;

mongoose.set('strictQuery',false)
//const connection= mongoose.connect('mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority');
const connection = mongoose.connect(config.mongo.URL)
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

initializePassport();
app.use(passport.initialize())
app.use(cookieParser());

app.use('/',viewRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/users',usersRouter)
app.use('/api/session',sessionRouter)

const server =app.listen(PORT,()=>console.log("Server Arriba"))