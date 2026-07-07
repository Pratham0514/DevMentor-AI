import mongoose from "mongoose";
const connectDB= async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected Successfully ✅📦");
    } catch (error) {
        console.error("Error connecting to MongoDB ❌📦:", error);
        process.exit(1);
        //process.exit(1); is used to immediately stop the Node.js application when a serious error occurs.
    }
}
export default connectDB