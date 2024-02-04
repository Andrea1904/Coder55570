import { Router } from 'express'
import userRouter from './users/users.router.js'
import ordersRouter from './orders/orders.router.js'
import businessesRouter from './bussinesses/businesses.router.js'


const router= Router()

router.use('/users',userRouter)
router.use('/businesses',businessesRouter)
router.use('/orders',ordersRouter)

export default router