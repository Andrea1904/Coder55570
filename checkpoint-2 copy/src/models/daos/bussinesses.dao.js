import BusinessesModel from "../schemas/businesses.model.js";

export class BusinessesDAO {
  async getBusinesses() {
    const Businesses = await BusinessesModel.find().lean();
    return Businesses;
  }

  async getBusinessById(id) {
    const business = await BusinessesModel.findOne({ _id: id }).lean();
    return business;
  }

  async createBusiness(payload) {
    const newBusiness = await BusinessesModel.create(payload);
    return newBusiness;
  }

  async updateBusiness(id, payload) {
    const updatedBusiness = await BusinessesModel.updateOne({ _id: id }, {
      $set: payload
    });
    return updatedBusiness;
  }

  async addProduct(id, product) {
    const updatedBusiness = await BusinessesModel.updateOne({ _id: id }, {
      $push: { products: product }
    });
    return updatedBusiness;
  }
}