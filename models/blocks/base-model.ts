const mongoose = require("mongoose");

export interface IBlock {
  _id: string;
  block_order: number;
  block_page: string;
  heading: string;
  publish: boolean;
}

export const baseSchema = new mongoose.Schema({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  heading: { type: String, required: true, unique: true },
  publish: { type: Boolean, required: true, default: null },
});
