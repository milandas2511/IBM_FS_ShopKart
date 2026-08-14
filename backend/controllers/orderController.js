const Order = require("../models/Order");

exports.create = async (req, res, next) => {
  try {
    const { items, shippingAddress, totalAmount } = req.body;
    if (!items?.length) return res.status(400).json({ message: "Order must contain products" });
    const order = await Order.create({ user: req.user.id, items, shippingAddress, totalAmount });
    res.status(201).json({ order });
  } catch (e) { next(e); }
};

exports.list = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (e) { next(e); }
};
