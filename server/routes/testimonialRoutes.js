const express = require("express");

const {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const router = express.Router();

// Create
router.post("/", createTestimonial);

// Get All
router.get("/", getTestimonials);

// Get One
router.get("/:id", getTestimonial);

// Update
router.put("/:id", updateTestimonial);

// Delete
router.delete("/:id", deleteTestimonial);

module.exports = router;