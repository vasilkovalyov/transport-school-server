import { Schema, model } from "mongoose";

export interface IService {
  _id: string;
  heading: string;
  price: number;
  top_list_info: string[];
  bottom_list_info: string[];
}

export const ServiceSchema = new Schema<IService>({
  heading: { type: String, required: true, unique: true },
  price: { type: Number },
  top_list_info: [{ type: String, default: [] }],
  bottom_list_info: [{ type: String, default: [] }],
});

export const Service = model("Service", ServiceSchema);

export default Service;
