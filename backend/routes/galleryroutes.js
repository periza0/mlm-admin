const express = require("express");
const router = express.Router();

const Gallery = require("../models/gallery");

// GET
router.get("/", async (req, res) => {
  const images = await Gallery.find();
  res.json(images);
});

// POST
router.post("/", async (req, res) => {
  const image = await Gallery.create(req.body);
  res.json(image);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Gallery.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted",
  });
});

module.exports = router;