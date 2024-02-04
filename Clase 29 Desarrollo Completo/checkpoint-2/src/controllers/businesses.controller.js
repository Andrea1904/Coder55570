import { BusinessesService } from "../services/bussinesses.service.js";
import { HTTP_STATUS, successResponse } from "../utils/response.utils.js";

const businessesService = new BusinessesService();
export class BusinessesController {

  static async getBusinesses(req, res, next) {
    try {
      const businesses = await businessesService.getBusinesses();
      const response = successResponse(businesses);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async getBusinessById(req, res, next) {
    const { bid } = req.params;
    try {
      const business = await businessesService.getBusinessById(bid);
      const response = successResponse(business);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async createBusiness(req, res, next) {
    const businessPayload = req.body;
    try {
      const newBusiness = await businessesService.createBusiness(businessPayload);
      const response = successResponse(newBusiness);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async addProductToBusiness(req, res, next) {
    const { bid } = req.params;
    const { product } = req.body;
    try {
      const updatedBusiness = await businessesService.addProduct(bid, product);
      const response = successResponse(updatedBusiness);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}