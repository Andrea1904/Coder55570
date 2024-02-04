import {Router} from 'express'
import AdminError from '../utils/adminError.js'
import TypesError from '../utils/typesError.js'
import { generateErrorInfo } from '../utils/info.js'

const users=  []
const router = Router()


router.get( '/', (req,res)=>{
    res.send({ status: 'Success', payload: users})
})

router.post('/',(req,res)=>{
    const { first_name} = req.body
 if(!first_name){
    AdminError.createError({
        name:' Error cuando envio el primer nombre',
        cause: generateErrorInfo({first_name}),
        message: 'Se presento un fallo cuando iba a crear el usuario',
        code: TypesError.INFO_TYPES
    })
 }

    const user ={
        first_name
    }
    users.push(user)

    res.send({ status:success, payload:users})

})
export default router