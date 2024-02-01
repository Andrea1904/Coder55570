import { Router } from 'express';
import coursesController from '../controller/courses.controller.js';
import appyPolicy from '../middleware/auth.middleware.js';

const router = Router();

router.get('/',coursesController.getCourses)
//router.get ('/',appyPolicy(['TEACHER']),coursesController.getCourses)


router.post('/',coursesController.createCourse)


export default router;