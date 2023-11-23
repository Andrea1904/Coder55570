import passport from 'passport'
import local from 'passport-local'

import userModel from '../models/Users.model.js'
import { createHash,isValidPassword } from '../utils.js'

const LocalStrategy = local.Strategy;

const initializedPassport = () =>{

    passport.use('register', new LocalStrategy( {passReqToCallback :true , usernameField :'email'},
    async(req,username,password,done)=>{
        const { first_name, last_name, email, age} = req.body;
        try{
            const user = await userModel.findOne({email : username});
            if(user) {
                console.log(user)
            return done(null,false)
            }
            const newUser = {
                first_name,
                last_name,
                email,
                age,
                password: createHash(password)
            }
            let result = await userModel.create(newUser);
            return done(null,result)
        }catch(error){
            return done('User Not fount'+error)
        }
    }
    ))

    passport.use('login', new LocalStrategy( {passReqToCallback :true , usernameField :'email'},
    async(req,email,password,done)=>{

        try{
            const user = await userModel.findOne({email:email});
            console.log ( ' User login ' + user)
            if(!user) {
                return done(null,false)
            }

            if(!isValidPassword(user,password)) {
                return done(null,false)
            }
            
            return done(null,user)
        }catch(error){
            return done(null,false)
        }
    }
    ))

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{
        let user = await userModel.findById(id)
        done(null,user)
    })
}

export default initializedPassport