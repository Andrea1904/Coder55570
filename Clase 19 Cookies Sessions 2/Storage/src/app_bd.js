//  Bd
import express from 'express'
import session from 'express-session'
import cookieParse from 'cookie-parser'
import FileStorage from 'session-file-store'
import MongoStorage from 'connect-mongo'

const fileStorage = FileStorage(session)
const app = express()

app.use(cookieParse())

app.use(session({
    store: MongoStorage.create({
        mongoUrl:'mongodb+srv://User55570:1234@pruebacoder.rpvqwdz.mongodb.net/Clase19Storage?retryWrites=true&w=majority',
        mongoOptions: {useNewUrlParser :true , useUnifiedTopology: true},
        ttl: 15
    }),
    secret: 'CoderSecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/',(req,res)=>{
    req.session.counter=1
    res.send('Bienvenidos !!')
})
app.listen( '8080',()=> console.log('Server Up'))