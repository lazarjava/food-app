import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lazarjava352_db_user:Common%40123@cluster0.w3bug92.mongodb.net/food-app');
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // app stop aagum if DB fail
  }
};
