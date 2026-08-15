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

const allowedOrigins = [
  "http://localhost:5173",
  "https://ibm-fs-shopkart-u238.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ShopKart API is running",
  });
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
    app.listen(port, "0.0.0.0", () => {
      console.log(`API running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });