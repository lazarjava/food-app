import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Routes
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// =======================
// Middleware
// =======================
app.use(express.json());

// ✅ Correct CORS for Frontend + Admin + Local
const allowedOrigins = [
  "http://localhost:3000",
  "https://joyfulfoodapp.netlify.app",   // frontend
  "https://joyfuladmin.netlify.app"      // admin
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// =======================
// Routes
// =======================
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Static images
app.use("/images", express.static("uploads"));

// Health check
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

// =======================
// Start Server AFTER DB
// =======================
const startServer = async () => {
  try {
    await connectDB(); // 🔥 MUST WAIT
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();

export default app;
