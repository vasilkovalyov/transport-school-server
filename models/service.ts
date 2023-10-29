import mongoose, { Schema, model } from "mongoose";

export type ServiceType = {
  _id: string;
  heading: string;
  price: number;
  top_list_info: string[];
  bottom_list_info: string[];
};

const listSchema = new mongoose.Schema({
  text: {
    type: String,
    default: null,
  },
});

export const ServiceSchema = new Schema<ServiceType>({
  heading: { type: String, required: true, unique: true },
  price: { type: Number },
  top_list_info: [listSchema],
  bottom_list_info: [listSchema],
});

export const Service = model("Service", ServiceSchema);

export default Service;
