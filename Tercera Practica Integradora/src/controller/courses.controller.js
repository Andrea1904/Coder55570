import { courseService } from "../repository/service.js";

const getCourses = async (req,res)=>{
    let courses = await courseService.getAllCourses()
    res.send({ status: 'success', payload: courses})
}

const createCourse = async(req,res)=>{
    const { title,description} = req.body

    let newCourse ={
        title,
        description,
        teacher: 'Sin Asignar',
        students: []
    }
    let result = await courseService.createCourse(newCourse)

    res.send({ status: 'Success', payload: result})
}

export default {
    getCourses,
    createCourse
}