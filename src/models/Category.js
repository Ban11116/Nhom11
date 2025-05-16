import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_id: { type: String, required: true, unique: true },
  name: String,
  description: String
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);
export default Category;
