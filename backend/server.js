import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 10000;

// middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://food-app-piss.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const startServer = async () => {
  try {
    await connectDB();

    app.use("/api/food", foodRouter);
    app.use("/api/user", userRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/order", orderRouter);
    app.use("/images", express.static("uploads"));

    app.get("/", (req, res) => {
      res.send("API Working");
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Server failed to start ❌");
    process.exit(1);
  }
};

startServer();
