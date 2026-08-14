const Product = require("../models/Product");

exports.list = async (req, res, next) => {
  try {
    const { search = "", category = "", sort = "", limit = 40 } = req.query;
    const filter = {};
    if (category) filter.category = new RegExp(`^${category}$`, "i");
    if (search) filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } }
    ];
    let query = Product.find(filter).limit(Math.min(Number(limit) || 40, 100));
    if (sort === "priceAsc") query = query.sort({ price: 1 });
    if (sort === "priceDesc") query = query.sort({ price: -1 });
    if (sort === "rating") query = query.sort({ rating: -1 });
    const products = await query;
    res.json({ products });
  } catch (e) { next(e); }
};

exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (e) { next(e); }
};
