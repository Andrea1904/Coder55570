import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { error } from 'console';

export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10)) // register

export const isValidPassword = ( user, password) => bcrypt.compareSync(password,user.password) //  login 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PRIVATE_KEY= 'CoderSecret'

export const generateToken =(user)=>{
    const token = jwt.sign({user},PRIVATE_KEY,{expiresIn:'12h'})
}

export const authToken =(req,res,next)=>{
    const header = req.headers.autorization;

    if(!header){
        return res.status(401).send({status:'error',error: 'Usuarios no autorizado'})
    }
    console.log('Aqui llego la info  '+header)

    const token = header.split(' '[1])

    jwt.verify(token,PRIVATE_KEY,(error,credentials)=>{
        if(error)return res.status(401).send({status:'error',error: 'Usuarios no autorizado'})
        req.user = credentials.user;
        next()    
    })

}


export default __dirname;