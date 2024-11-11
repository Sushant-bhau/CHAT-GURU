import { connect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (err) {
    throw new Error(`Error connecting to database: ${err}`);
  }
}

async function disconnectFromDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (err) {
    throw new Error(`Error connecting to database: ${err}`);
  }
}

export { connectToDatabase, disconnectFromDatabase };
