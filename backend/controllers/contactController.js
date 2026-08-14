const Contact = require("../models/Contact");

exports.create = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: "Name, email and message are required" });
    const contact = await Contact.create({ name, email, phone, message });
    res.status(201).json({ message: "Message received", contact });
  } catch (e) { next(e); }
};
