const mongoose = require("mongoose");
import { BlocsEnum } from "./block-enum.type";

export interface IBlock {
  _id: string;
  block_order: number;
  block_page: string;
  block_name: BlocsEnum;
  heading: string;
  publish: boolean;
}

export const baseSchema = new mongoose.Schema({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  heading: { type: String, required: true, unique: true },
  publish: { type: Boolean, default: null },
});

export const shortSchema = new mongoose.Schema({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  publish: { type: Boolean, default: null },
});
