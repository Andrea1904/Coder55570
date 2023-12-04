import passport from 'passport'
import local from 'passport-local'

import userModel from '../models/Users.model.js'
import { createHash,isValidPassword } from '../utils.js'

import GitHubStrategy from 'passport-github2'

const LocalStrategy = local.Strategy;

const initializedPassport = () =>{

    passport.use('github', new GitHubStrategy({
        clientID:'Iv1.d87fb234aa8f38ee',
        clientSecret:'76be55e6f44b151518a7e6d73f094d8a8418358a',
        callbackURL:'http://localhost:8080/api/sessions/githubcallback'

    },
    async ( accesToken , refreshToekn, profile ,done) =>{
        try{
            let user = await userModel.findOne({ email : profile._json.email})
        if(!user){
            let newUser ={
                first_name: profile._json.name,
                last_name: '',
                email: profile._json.email,
                age: '123',
                password:''
            }
            let result = await userModel.create(newUser);
            done(null,result)
        }

        }catch(error){
            done(error)
        }
    }
    ))

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