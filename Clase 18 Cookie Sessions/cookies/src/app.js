import express from 'express'
import cookieParser from 'cookie-parser'

const app= express()
const PORT = 3000

// Midd
app.use(cookieParser('CookieSecret'))

// Routes

app.get('/set', (req,res)=>{
    res.cookie('server','express').send('cookie set')
})

app.get('/set1', (req,res)=>{
    res.cookie('server1','express1',{
        maxAge: 10000
    }).send('cookie set 2')
})

app.get('/get',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies.server)
})

app.get('/cookieSigned',(req,res)=>{
    res.cookie('signedServer','Esta es una cookie firmada',{ maxAge: 10000, signed: true }).send('Cookie firmada')
}
)

app.get('/clear',(req,res)=>{
    res.clearCookie('server').send('Cookie erased ')
})
app.listen(PORT,()=> console.log( 'Server UP'))