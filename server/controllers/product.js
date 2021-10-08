import Product from "../models/Product.js";

// @desc Creating a product by admin
// @route POST /api/product
// @access Private
export const createProduct = async (req, res) => {
  try {
    const { title, description, image, category, color, price } = req.body;
    const newProduct = await Product.create({
      title,
      description,
      image,
      category,
      color,
      price,
    });

    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Updating a product by admin
// @route PUT /api/product/:id
// @access Private
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Deleting a product by admin
// @route DELETE /api/product/:id
// @access Private
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product removed from the database",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Getting a product
// @route GET /api/product/:id
// @access Private/Public
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Getting all products
// @route GET /api/product/
// @access Private/Public
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
