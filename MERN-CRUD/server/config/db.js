import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log("Connection Successfully 👍");
    }
    else{
      console.log("Connection Unsuccessfull");
    }
  } catch (err) {
    console.log(`Error in connectDB: ${err}`);
  }
};
export default connectDB;
