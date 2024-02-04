import { OrderController } from "../../controllers/orders.controller.js"
import { Router } from 'express'

const router= Router()

router.get('/',OrderController.getOrders)
router.get('/:oid',OrderController.getOrderById)
router.post('/',OrderController.createOrder)
router.put('/:oid/products',OrderController.resolveOrder)

export default router