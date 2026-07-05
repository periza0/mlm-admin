const cors = require("cors");
const express = require("express");

require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require(
  "./routes/authroutes"
);
const achievementRoutes = require(
  "./routes/achroutes"
);
const uploadroutes = require(
  "./routes/uploadroutes"
);
const galleryRoutes = require(
  "./routes/galleryroutes"
);
const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/api/upload",
  uploadroutes
);

const requireDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({
      message: "Database connection failed",
    });
  }
};

app.use(requireDB);

app.use(
  "/api/ach",
  achievementRoutes
);
app.use(
  "/api/gallery",
  galleryRoutes
);
app.use(
  "/api/auth",
  authRoutes
);

const PORT = process.env.PORT || 8000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
