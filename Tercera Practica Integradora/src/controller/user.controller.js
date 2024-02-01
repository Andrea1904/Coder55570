import { userService,courseService} from '../repository/service.js'
import MailingService from '../services/mailing.js'
import mailingService from '../services/mailing.js'

const getUser = async(req,res)=>{
    let user = await userService.getAllUsers()
    if(!user) return res.status(500).send({ status: 'error', error: ' No pudo encontrar usuarios'})
}

const createUser= async (req,res)=>{
    let { first_name, last_name, email ,  dni, birthDate,gender,password} = req.body
    let newUser = await userService.createUser({
        first_name, last_name, email ,  dni, birthDate,gender,password
    })
    res.send({ status:'success',payload: newUser})
}

const registerUser = async (req,res)=>{

    console.log('Entre por aqui ')


    const {uid,cid}= req.params
   
    //const uid='65baedafb07efacce7130f67'
   // const cid='65baed7840a5498218300712'

    const user= await userService.getUserById({_id: uid})
    console.log(user +' Traje la info del usuario ')
    const course = await courseService.getCoursesById(cid)

    user.courses.push(course._id)
    course.students.push(user._id)

    await userService.update(uid,user)
    await courseService.update(cid,course)

    const mailer = new MailingService()
    const sendMailer = await mailer.sendMailUser({

        from:'coderprofeandrea@gmail.com',
        to: 'coderprofeandrea@gmail.com',
        subject: 'Cursos registrados',
        html: `<div> Su curso ha sido registrado
            Curso : ${course.title},
            Decripcion : ${course.description}`

    })

    res.send({ status: 'success', message: "Usuario registrado en el curso"})
}

export default {
    getUser,
    createUser,
    registerUser
}