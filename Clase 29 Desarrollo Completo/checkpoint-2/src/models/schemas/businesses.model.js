import { Schema, model } from 'mongoose';

const collection = 'businesses';
const schema = new Schema({
  name: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
});

const BusinessesModel = model(collection, schema);
export default BusinessesModel;