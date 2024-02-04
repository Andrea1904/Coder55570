import { Schema, model } from 'mongoose';

const collection = 'products';
const schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  thumbnail_url: { type: String }
});

const ProductsModel = model(collection, schema);
export default ProductsModel;