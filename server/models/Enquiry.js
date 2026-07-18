const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    projectType: {
      type: String,
      default: "",
    },

    budget: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },
    source: {
    type: String,
    enum: ["popup", "contact"],
    default: "contact"
}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enquiry", enquirySchema);