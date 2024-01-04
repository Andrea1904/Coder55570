import { HTTP_STATUS, HttpError }  from "../utils/response.utils.js"

import { getDAOS } from "../models/daos/index.dao.js";

const { ordersDao, productsDao, businessesDao, usersDao } = getDAOS();

export class OrdersService {
    async getOrders() {
      const orders = await ordersDao.getOrders();
      return orders;
    }

    async getOrderById(id) {
      if (!id) {
        throw new HttpError('Missing param', HTTP_STATUS.BAD_REQUEST)
      }
      const order = await ordersDao.getOrderById(id);
      if (!order) {
        throw new HttpError('Order not found', HTTP_STATUS.NOT_FOUND)
      }
      return order;
    }

    async createOrder(payload) {
      const { business, user, products } = payload;
      if (!business || !user) {
        throw new HttpError('`business` and `user` are required fields', HTTP_STATUS.BAD_REQUEST);
      }
      
      const businessDB = await businessesDao.getBusinessById(business);
      if (!businessDB) {
        throw new HttpError('Business not found', HTTP_STATUS.BAD_REQUEST);
      }

      const userDB = await usersDao.getUserById(user);
      if (!userDB) {
        throw new HttpError('User not found', HTTP_STATUS.BAD_REQUEST);
      }

      if (!products || !Array.isArray(products) || !products.length) {
        throw new HttpError('Products array not valid', HTTP_STATUS.BAD_REQUEST);
      }
      
      const productsMap = products.reduce((productsMap, currentProduct) => {
        productsMap[currentProduct.reference] = currentProduct.quantity;
        return productsMap;
      }, {});

      const productsIds = Object.keys(productsMap);
      const productsFilter = { _id: { $in: productsIds }};
      const productsDB = await productsDao.getproducts(productsFilter);
      
      if (!productsDB || !productsDB.length) {
        throw new HttpError('Please check products list', HTTP_STATUS.BAD_REQUEST);       
      }

      let totalPrice = 0;
      const productsPayload = productsDB.map(product => {
        const reference = product._id;
        const quantity = productsMap[reference];
        const price = product.price;
        totalPrice += price * quantity;
        return {
          reference,
          quantity,
          price,
        }
      });

      const order_number = Date.now();
      const newOrderPayload = {
        order_number,
        business,
        user,
        status: 'pending',
        products: productsPayload,
        total_price: totalPrice,
      };

      const newOrder = await ordersDao.createOrder(newOrderPayload);
      return newOrder;
    }

    async resolveOrder(id, resolution) {
      if (!id || !resolution) {
        throw new HttpError('Missing param', HTTP_STATUS.BAD_REQUEST);
      }

      if (resolution !== 'completed' && resolution !== 'rejected') {
        throw new HttpError('Wrong value for `resolution` param', HTTP_STATUS.BAD_REQUEST);
      }

      const order = await ordersDao.getOrderById(id);
      if (!order) {
        throw new HttpError('Order not found', HTTP_STATUS.NOT_FOUND);
      }

      order.status = resolution;
      await ordersDao.updateOrder(id, order);
      return order;
    }
}
