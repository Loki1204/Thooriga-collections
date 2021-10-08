import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imagesArray: { type: Array, required: true },
    category: { type: String, required: true },
    color: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;