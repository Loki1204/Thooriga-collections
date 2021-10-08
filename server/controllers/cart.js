import Cart from "../models/Cart.js";

// @desc Adding a product to cart
// @route POST /api/cart
// @access Public
export const createCart = async (req, res) => {
  try {
    const { userId, products } = req.body;

    const newCart = await Cart.create({
      userId,
      products,
    });

    return res.status(201).json({
      success: true,
      data: newCart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Updating cart
// @route PUT /api/cart/:id
// @access Public
export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updatedCart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Removing a product from cart
// @route REMOVE /api/cart/:id
// @access Public
export const removeProductFromCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        error: "No cart found",
      });
    }

    await cart.remove();

    res.status(200).json({
      success: true,
      message: "Product removed from the cart",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Getting user cart
// @route GET /api/cart/find/:userId
// @access Public
export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get all cart by admin
// @route GET /api/cart
// @access Private
export const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json({
      success: true,
      data: carts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
