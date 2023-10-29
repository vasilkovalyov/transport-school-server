const mongoose = require("mongoose");
import { BlocsEnum } from "./block-enum.type";

export type BlockType = {
  _id: string;
  block_order: number;
  block_page: string;
  block_name: BlocsEnum;
  heading: string;
  publish: boolean;
};

export type BlockShortType = Omit<BlockType, "heading">;

export const baseSchema = new mongoose.Schema({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  heading: { type: String, required: true },
  publish: { type: Boolean, default: null },
});

export const shortSchema = new mongoose.Schema({
  block_order: { type: Number, default: null },
  block_page: { type: String, default: null },
  publish: { type: Boolean, default: null },
});
