// import mongoose
import mongoose from "mongoose";
// import environment variables
import dotenv from 'dotenv';
dotenv.config();

// define a function to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

// call the connectToDatabase function
connectToDatabase();

// export the mongoose instance
export default mongoose;