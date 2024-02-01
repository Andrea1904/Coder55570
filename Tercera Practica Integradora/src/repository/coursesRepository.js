export default class CoursesRepository{
    constructor(dao){
        this.dao=dao
    }

    getAllCourses=()=>{
        return this.dao.getAll()
    }

    getCoursesById=(id)=>{
        return this.dao.getBy(id)
    }

    createCourse=(course)=>{
        return this.dao.saveCourses(course)
    }
    update=(id,course)=>{
        return this.dao.updateCourse(id,course)
    }
}