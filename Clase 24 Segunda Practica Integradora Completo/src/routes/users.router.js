import { Router } from 'express';
import Users from '../dao/dbManagers/users.js'
import Courses from '../dao/dbManagers/courses.js';
const userManager= new Users()

const router = Router();


router.get('/',async(req,res)=>{
    let courses = await coursesManager.getAll();
    res.send({status:"success",payload:courses})
})

router.post('/',async(req,res)=>{
    let { first_name, last_name, birthDate,gender,dni,email,password } = req.body
    if ( ! first_name|| !last_name|| !birthDate||!gender||!dni)
    return  res.status(400).send ({status:'error',error:'Incompleted'})

    let result = await userManager.saveUser({
        first_name,last_name,
        email,
        dni,
        birthDate,gender,
        password
    })
    res.send({status:"success",payload:result});
})
//metodo para actualizar productos 

export default router;