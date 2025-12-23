import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lazarjava352_db_user:Common%40123@cluster0.w3bug92.mongodb.net/food-app"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
