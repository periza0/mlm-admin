const express = require("express");
const router = express.Router();

const Achievement = require("../models/ach");

// GET all players
router.get("/", async (req, res) => {
  try {
    const players = await Achievement.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD player
router.post("/", async (req, res) => {
  try {
    const player = await Achievement.create(req.body);

    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;