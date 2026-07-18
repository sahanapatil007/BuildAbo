const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Residential", "Interior", "Commercial"],
    },

    location: {
      type: String,
      required: true,
    },

    sqft: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    // Main image shown on Home & Projects page
    image: {
      type: String,
      required: true,
    },

    // Additional images for Project Details page
    gallery: [
      {
        type: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);