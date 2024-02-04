import { Schema, model } from 'mongoose';

const collection = 'orders';
const schema = new Schema({
  order_number: { type: String, required: true },
  business: {
    type: Schema.Types.ObjectId,
    ref: 'businesses'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  status: { type: String, enum: ["pending", "rejected", "completed"], default: "pending"},
  products: [{
    reference: { type: Schema.Types.ObjectId, ref: 'products', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  total_price: {
    type: Number,
    default: 0
  }
});

const OrdersModel = model(collection, schema);
export default OrdersModel;