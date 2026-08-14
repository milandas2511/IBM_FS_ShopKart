require("dotenv").config();

const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/wishlist", require("./routes/wishlist"));

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Server error",
  });
});

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });