import { Router } from "express";

import userController from "../controllers/user.controller.js";

const router= Router()

//router.get('/', userController.getUser)
//router.get('/', userController.createUser)
//export default router

class UserRouter {
     constructor(){
        this.variableRouter = Router ()
        this.variableRouter.get('/',userController.getUser)
        this.variableRouter.post('/',userController.createUser)
     }
     getRouter(){
        return this.variableRouter
     }
}
export default new UserRouter()

