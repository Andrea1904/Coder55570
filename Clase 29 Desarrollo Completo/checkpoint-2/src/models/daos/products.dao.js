import ProductsModel from "../schemas/products.model.js";

export class ProductsDAO {
  async getproducts(filter = {}) {
    const products = await ProductsModel.find(filter).lean();
    return products;
  }

  async getProductById(id) {
    const product = await ProductsModel.findOne({ _id: id }).lean();
    return product;
  }
}