const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const tokenFor = (user) => jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });
const safeUser = (u) => ({ id: u._id, name: u.name, email: u.email });

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) return res.status(400).json({ message: "Name, email and a 6+ character password are required" });
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email is already registered" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ token: tokenFor(user), user: safeUser(user) });
  } catch (e) { next(e); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password || "", user.password))) return res.status(401).json({ message: "Invalid email or password" });
    res.json({ token: tokenFor(user), user: safeUser(user) });
  } catch (e) { next(e); }
};

exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user: safeUser(user) });
  } catch (e) { next(e); }
};
