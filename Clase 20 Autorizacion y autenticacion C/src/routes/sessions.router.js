import { Router } from 'express';
import userModel from '../models/Users.model.js';
//import { createHash ,isValidPassword } from '../utils.js';
import passport from 'passport'


const router = Router();
/*  implmentacion del hash en user y contrasena 
router.post('/register',async(req,res)=>{
    const { first_name, last_name, email, age, password} = req.body;
    const exists = await userModel.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
    const user = {
        first_name,
        last_name,
        email,
        age,
        password: createHash(password)
    }
    let result = await userModel.create(user);
    res.send({status:"success",message:"User registered"});
})

router.post('/login',async(req,res)=>{
    const {email, password} = req.body;
    console.log(password)
    
    const user = await userModel.findOne({email}); //Ya que el password no está hasheado, podemos buscarlo directamente
    console.log(user + ' Pase por aqui')
   
    if(!user) return res.status(400).send({status:"error",error:"Incorrect credentials"});

    if(!isValidPassword(user,password)) if(!user) return res.status(403).send({status:"error",error:"Incorrect password"});
    req.session.user= user
    res.send({status:"success", payload:req.session.user, message:"¡Primer logueo realizado! :)" });
})

router.post('/restartPassword',async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).send({status:"error",error:"Incomplete Values"});
    const user = await userModel.findOne({email});
    if(!user) return res.status(404).send({status:"error",error:"Not user found"});
    const newHashedPassword = createHash(password);
    await userModel.updateOne({_id:user._id},{$set:{password:newHashedPassword}});
    res.send({status:"success",message:"Contraseña restaurada"});
})*/

router.post('/register', passport.authenticate('register',{
    failureRedirect:'/failregister'
}),  async(req,res)=>{

    res.send({status:"success",message:"User registered"});
})

router.get('/failregister',async(req,res)=>{
    res.send({error:'failed'})
})

router.post('/login', passport.authenticate('login',{
    failureRedirect:'/faillogin'
}),  async(req,res)=>{
    const {email, password}=req.body
    if(!req.user) return res.status(400).send({status:"error",error:"Incomplete Values"});

    req.session.user={
        first_name: req.user.first_name
    }

    res.send({status:"success",payload:req.user});
})

router.get('/faillogin',async(req,res)=>{
    res.send({error:'failed'})
})

export default router;