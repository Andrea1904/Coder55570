import { BusinessesDAO } from "./bussinesses.dao.js";
import { OrdersDAO } from "./orders.dao.js";
import { ProductsDAO } from "./products.dao.js";
import { UsersDAO } from "./users.dao.js";

const usersDao = new UsersDAO();
const ordersDao = new OrdersDAO();
const businessesDao = new BusinessesDAO();
const productsDao = new ProductsDAO();

export const getDAOS = () => {
  return {
    usersDao,
    ordersDao,
    businessesDao,
    productsDao,
  }
}