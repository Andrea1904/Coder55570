import BaseAPI from "../base.api.js"

export default class OrdersAPI extends BaseAPI {
  static baseEndpoint = '/api/orders';

  static async getOrders() {
    const response = await this.get(this.baseEndpoint);
    return response.data;
  }

  static async getOrderById(orderId) {
    const response = await this.get(`${this.baseEndpoint}/${orderId}`);
    return response.data;
  }

  static async resolveOrder(orderId, resolution) {
    const body = { resolution };
    const response = await this.put(`${this.baseEndpoint}/${orderId}`, body);
    return response.data;
  }
}