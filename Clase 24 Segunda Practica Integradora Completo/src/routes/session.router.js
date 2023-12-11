import { Router } from "express";
import passport from 'passport'
import jwt from 'jsonwebtoken'

const router = Router()

router.post ('/register',passport.authenticate('register',{
    passReqToCallback:true,
    session:false,
    failureRedirect: '/session/failedRegister',
    failureMessage: true
}), (req,res)=>{
    res.send ({ status : "success", message:'user register', payload : req.user._id})
}
)

router.post ('/login',passport.authenticate('login',{
    passReqToCallback:true,
    session:false,
    failureRedirect: '/session/failedLogin',
    failureMessage: true
}), (req,res)=>{
    console.log("(--")
    const user = {
        id: req.user._id,
        name: `${req.user.first_name}`
    }
    const token = jwt.sign(user,'secret', {expiredIn :'1h'})
    res.cookie('cookie',token,{maxAge:36000000}).send({status:'success',payload:user})
})
router.get('/failedLogin',(req,res)=>{
    res.send(req.message)
})


export default router