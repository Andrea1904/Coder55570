import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import { generateToken,authToken} from './utils.js';
import __dirname from './utils.js';

import passport from 'passport'
import userModel from './models/Users.model.js';

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

const users =[{
    email: 'andrea.lopez1904@gmail.com',
    password: '1234'
}]

app.get('/',(req,res)=>[
    res.render('home')
])

app.post('/api/register',async(req,res)=>{
    const { name, email} = req.body;
    const exists = users.find(user=> user.email === email);
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const user = {
        name,
        email,
        age
    }
    users.push(user)
    const access_token = generateToken(user)
    res.send({status:"success",access_token});
})

app.post('/login',async(req,res)=>{
    const {email, password} = req.body;
    console.log(password)
    
    const user = await userModel.findOne({email}); //Ya que el password no está hasheado, podemos buscarlo directamente
    console.log(user + ' Pase por aqui')
   
    if(!user) return res.status(400).send({status:"error",error:"Incorrect credentials"});

    if(!isValidPassword(user,password)) if(!user) return res.status(403).send({status:"error",error:"Incorrect password"});
    req.session.user= user
    res.send({status:"success", payload:req.session.user, message:"¡Primer logueo realizado! :)" });
})

const server = app.listen(8080,()=>console.log("Listening on 8080"))