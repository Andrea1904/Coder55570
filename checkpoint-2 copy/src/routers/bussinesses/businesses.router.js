import { BusinessesController } from "../../controllers/businesses.controller.js";
import { Router } from 'express'

const router= Router()

router.get('/',BusinessesController.getBusinesses)
router.get('/:bid',BusinessesController.getBusinessById)
router.post('/',BusinessesController.createBusiness)
router.post('/:bid/products',BusinessesController.addProductToBusiness)

export default router