import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () =>{
 try{
        await mongoose.connect('mongodb://127.0.0.1:27017/college');
        console.log(`Connected to Mongodb DataBase`.bgMagenta.white);
 }catch(err)
 {
    console.log(`MONGO Connect Error ${err}`.bgRed.white);
 }
};

export default connectDB;