const express = require("express");
const router = express.Router();
const LostItem = require("../models/LostItem");

// CREATE lost item
router.post("/", async (req, res) => {
  try {
    const { itemName, description, location, contact } = req.body;

    const newItem = new LostItem({
      itemName,
      description,
      location,
      contact,
    });

    await newItem.save();

    res.status(201).json({
      message: "Lost item reported successfully",
      item: newItem,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to report lost item",
      error: error.message,
    });
  }
});

// FETCH all lost items
router.get("/", async (req, res) => {
  try {
    const items = await LostItem.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch lost items",
      error: error.message,
    });
  }
});

module.exports = router;
