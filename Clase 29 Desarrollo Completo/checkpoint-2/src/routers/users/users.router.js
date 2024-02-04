import { UsersController } from "../../controllers/users.controller.js"
import { Router } from 'express'

const router= Router()

router.get('/',UsersController.getUsers)
router.get('/:uid',UsersController.getUserById)
router.post('/',UsersController.createUser)

export default router