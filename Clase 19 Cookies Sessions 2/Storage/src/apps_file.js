//  File Storage 
import express from 'express'
import session from 'express-session'
import cookieParse from 'cookie-parser'
import FileStorage from 'session-file-store'

const fileStorage = FileStorage(session)
const app = express()

app.use(cookieParse())

app.use(session({
    store: new fileStorage({ path: './sessions',ttl:100,retries:0}),
    secret: 'CoderSecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/',(req,res)=>{
    req.session.counter=1
    res.send('Bienvenidos !!')
})
app.listen( '8080',()=> console.log('Server Up'))