import  mongoose  from "mongoose";

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URL)  
       console.log('Connection Successfully 👍')
    }
    catch (err) {
        console.log(`Error in connectDB: ${err}`)
    }
}
export default connectDB