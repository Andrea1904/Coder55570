import { UserController } from "../../controllers/users.controller.js"
import { Router } from 'express'

const router= Router()

router.get('/',UserController.getUser)
router.get('/:uid',UserController.getUserById)
router.post('/',UserController.createUser)

export default router