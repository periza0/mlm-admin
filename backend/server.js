const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
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
  "/api/ach",
  achievementRoutes
);
app.use(
  "/api/upload",
  uploadroutes
);
app.use(
  "/api/gallery",
  galleryRoutes
);
app.use(
  "/api/auth",
  authRoutes
);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });