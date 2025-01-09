const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database");
  } catch (err) {
    throw new Error(`Error connecting to database: ${err.message}`);
  }
}

async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (err) {
    throw new Error(`Error disconnecting from database: ${err.message}`);
  }
}

module.exports = { connectToDatabase, disconnectFromDatabase };
