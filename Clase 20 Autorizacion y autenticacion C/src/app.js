import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import initializedPassport from './config/passport.config.js';
import passport from 'passport'

const app = express();
const connection = mongoose.connect('mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/Clase19Storage?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))
app.use(session({
    store:new MongoStore({
        mongoUrl:'mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/Clase19Storage?retryWrites=true&w=majority',
        ttl:3600
    }),
    secret:"CoderSecret",
    resave:false,
    saveUninitialized:false
}))
initializedPassport()
app.use(passport.initialize())
app.use(passport.session())
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);

const server = app.listen(8080,()=>console.log("Listening on 8080"))