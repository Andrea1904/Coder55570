import {Router} from 'express';
import Users from '../dao/dbManagers/users.js';
import Courses from '../dao/dbManagers/courses.js';

import userController from '../controller/user.controller.js'

const usersManager = new Users();
const coursesManager = new Courses();
const router = Router();

router.get('/', userController.getUser)

router.post('/',userController.createUser)

router.post('/:uid/courses/:cid', userController.registerUser)

export default router;