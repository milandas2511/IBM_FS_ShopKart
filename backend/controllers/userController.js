const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const update = {};
    if (name) update.name = name;
    if (email) update.email = email;
    if (password) update.password = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(req.user.id, update, { new: true, runValidators: true });
    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { next(e); }
};
