<<<<<<< HEAD
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
=======
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Routes
>>>>>>> 210cc29b9b193499139f78825a9ca51bf520184a
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

<<<<<<< HEAD
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db
connectDB();

// routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
=======
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
>>>>>>> 210cc29b9b193499139f78825a9ca51bf520184a
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
=======
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
>>>>>>> 210cc29b9b193499139f78825a9ca51bf520184a
