import mongoose from "mongoose";

const connectDB = async (URL) => {
  try {
    await mongoose.connect(URL)
    console.log(`Connected Database 👍`)
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectDB;
