import Order from "../models/Order.js";

// @desc Creating an order
// @route POST /api/order
// @access Public
export const createOrder = async (req, res) => {
  try {
    const { userId, products, amount, address, status } = req.body;
    const newOrder = await Order.create({
      userId,
      products,
      amount,
      address,
      status,
    });
    res.status(201).json({
      success: true,
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Updating an order
// @route PUT /api/order/:id
// @access Private
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Removing an order
// @route DELETE /api/order/:id
// @access Private
export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "Order deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Getting user orders
// @route GET /api/order/find/:userId
// @access Private
export const getUserOrder = async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.userId });
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get all orders by admin
// @route GET /api/orders
// @access Private
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
