const Enquiry = require("../models/Enquiry");
const sendEmail = require("../utils/sendEmail");

const createEnquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      projectType,
      budget,
      message,
    } = req.body;

    // Basic validation
    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      phone,
      email,
      projectType,
      budget,
      message,
    });

    // ==========================
    // Send Emails
    // ==========================
    try {
      // Email to Customer
      await sendEmail({
        email: enquiry.email,
        subject: "Thank you for contacting BuildAbo",
        message: `
          <h2>Thank You for Contacting BuildAbo!</h2>

          <p>Hi <strong>${enquiry.name}</strong>,</p>

          <p>We have received your enquiry successfully.</p>

          <p>Our team will contact you within 24 hours.</p>

          <br>

          <p>Regards,</p>

          <h3>BuildAbo Team</h3>
        `,
      });

      // Email to Admin
      await sendEmail({
        email: process.env.EMAIL_USER,
        subject: "New Enquiry Received",
        message: `
          <h2>New Enquiry</h2>

          <p><strong>Name:</strong> ${enquiry.name}</p>

          <p><strong>Email:</strong> ${enquiry.email}</p>

          <p><strong>Phone:</strong> ${enquiry.phone}</p>

          <p><strong>Project Type:</strong> ${enquiry.projectType}</p>

          <p><strong>Budget:</strong> ${enquiry.budget}</p>

          <p><strong>Message:</strong></p>

          <p>${enquiry.message}</p>
        `,
      });

    } catch (emailError) {
      console.log("Email Error:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createEnquiry,
};