const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error(
      "MONGO_URI is undefined. Create backend/.env from .env.example."
    );
  }

  await mongoose.connect(uri);

  console.log("MongoDB connected");
  console.log("Database:", mongoose.connection.name);
}

module.exports = connectDB;