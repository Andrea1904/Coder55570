import CoursesRepository from "./coursesRepository.js";
import UserRepository from "./userRepository.js";

import Courses from "../dao/dbManagers/courses.js";
import User from "../dao/dbManagers/users.js"


const coursesDao= new Courses()
const userDao = new User()

export const courseService= new CoursesRepository(coursesDao)
export const userService = new UserRepository(userDao)