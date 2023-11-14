import express from 'express'
import session from 'express-session'
import auth from './middleware/auth.middleware.js'
const app= express()
const PORT = 3000

// Midd

app.use(session({
    secret: 'secretCoder',
    resave: true, // inactividad del usuario
    saveUninitialized: true // almacenar data
}))
// Routes

app.get('/getSession', (req,res)=>{
    
 if(req.session.counter){
    req.session.counter++
    res.send(`Has ingresado ${req.session.counter}`)
 }else{
    req.session.counter =1
    res.send('Bienvenido')
 }
})

/*
app.get( '/login', (req,res)=>{
    const {email, password} = req.query

    if(email !=='1@admin.com' || password!= '1')
    {
        return res.send('Login failed')
    }
    req.session.email = email
    req.session.admin= email.split('@')[1].includes('admin')?? false
    //res.send('Login success')
    res.redirect('/profile')

})*/

app.get( '/login', (req,res)=>{
    const {email} = req.query
    req.session.email = email
    req.session.isAdmin= email.split('@')[1].includes('admin')?? false
    //res.send('Login success')
    res.redirect('/profile')

})

app.get( '/profile', (req,res)=>{
    const email = req.session.email
    const html = 
    `<h1> Bienvenido ${email} !<h1> ` 
   
    //res.send(req.session)
    res.send(html)

})

app.get ('/admin',auth,(req,res)=>{
    res.send('El admin ha ingresado ')
})
app.listen(PORT,()=> console.log( 'Server UP'))