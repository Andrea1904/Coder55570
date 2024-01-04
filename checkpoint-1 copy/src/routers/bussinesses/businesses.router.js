import { BussicessesController } from "../../controllers/businesses.controller.js";
import { Router } from 'express'

const router= Router()

router.get('/',BussicessesController.getBussinesses)
router.get('/:bid',BussicessesController.getBussinessById)
router.post('/',BussicessesController.createBussinesses)
router.post('/:bid/products',BussicessesController.addProductsToBussiness)

export default router