import { HTTP_STATUS, HttpError }  from "../utils/response.utils.js"

import { getDAOS } from "../models/daos/index.dao.js";
const { businessesDao, productsDao } = getDAOS();

export class BusinessesService {
  async getBusinesses() {
    const businesses = await businessesDao.getBusinesses();
    return businesses;
  }

  async getBusinessById(id) {
    if (!id) {
      throw new HttpError('Missing param', HTTP_STATUS.BAD_REQUEST);
    }
    const business = await businessesDao.getBusinessById(id);
    if (!business) {
      throw new HttpError('Business not found', HTTP_STATUS.NOT_FOUND);
    }
    return business;
  }

  async createBusiness(payload) {
    const { name, products } = payload;
    if (!name || !products) {
      throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST);
    }

    if (!Array.isArray(products) || !products.length) {
      throw new HttpError('Products array not valid', HTTP_STATUS.BAD_REQUEST);
    }

    const productsFilter = { _id: { $in: products }};
    const productsDB = await productsDao.getproducts(productsFilter);
    
    if (!productsDB || !productsDB.length) {
      throw new HttpError('Please check products list', HTTP_STATUS.BAD_REQUEST);
    }
    const newBusinessPayload = {
      name,
      products
    };

    const newBusiness = await businessesDao.createBusiness(newBusinessPayload);
    return newBusiness;
  }

  async addProduct(businessId, product) {
    if (!businessId || !product) {
      throw new HttpError('Missing params', HTTP_STATUS.BAD_REQUEST);
    }
    const productDB = await productsDao.getProductById(product);
    if (!productDB) {
      throw new HttpError('Product not found', HTTP_STATUS.BAD_REQUEST);
    }
    const result = await businessesDao.addProduct(businessId, product);
    return result;
  }
}