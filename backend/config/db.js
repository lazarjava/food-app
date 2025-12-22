import mongoose from "mongoose";

export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://lazarjava352_db_user:Common%40123@cluster0.w3bug92.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}


