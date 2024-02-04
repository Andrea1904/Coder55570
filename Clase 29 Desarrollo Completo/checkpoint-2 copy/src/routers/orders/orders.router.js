import { OrdersController } from "../../controllers/orders.controller.js"
import { Router } from 'express'

const router= Router()

router.get('/',OrdersController.getOrders)
router.get('/:oid',OrdersController.getOrderById)
router.post('/',OrdersController.createOrder)
router.put('/:oid/products',OrdersController.resolveOrder)

export default router