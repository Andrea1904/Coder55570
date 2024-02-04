import { OrdersService } from "../services/orders.service.js";
import { HTTP_STATUS, successResponse } from "../utils/response.utils.js";

const ordersService = new OrdersService();
export class OrdersController {

  static async getOrders(req, res, next) {
    try {
      const orders = await ordersService.getOrders();
      const response = successResponse(orders);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async getOrderById(req, res, next) {
    const { oid } = req.params;
    try {
      const order = await ordersService.getOrderById(oid);
      const response = successResponse(order);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    const orderPayload = req.body;
    try {
      const newOrder = await ordersService.createOrder(orderPayload);
      const response = successResponse(newOrder);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async resolveOrder(req, res, next) {
    const { oid } = req.params;
    const { resolution } = req.body;
    try {
      const updatedOrder = await ordersService.resolveOrder(oid, resolution);
      const response = successResponse(updatedOrder);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}