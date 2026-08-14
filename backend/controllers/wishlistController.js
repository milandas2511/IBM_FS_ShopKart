const Wishlist = require("../models/Wishlist");

exports.get = async (req, res, next) => {
  try {
    const list = await Wishlist.findOne({ user: req.user.id }).populate("products");
    res.json({ products: list?.products || [] });
  } catch (e) { next(e); }
};

exports.toggle = async (req, res, next) => {
  try {
    let list = await Wishlist.findOne({ user: req.user.id });
    if (!list) list = await Wishlist.create({ user: req.user.id, products: [req.params.productId] });
    else if (list.products.some(id => id.toString() === req.params.productId)) list.products = list.products.filter(id => id.toString() !== req.params.productId);
    else list.products.push(req.params.productId);
    await list.save();
    res.json({ products: list.products });
  } catch (e) { next(e); }
};
