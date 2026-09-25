const express = require("express");
const router = express.Router();

const Contact = require("../contact");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact endpoint is running. Send contact forms with POST.",
  });
});

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    const contactData = {
      name: typeof name === "string" ? name.trim() : "",
      email: typeof email === "string" ? email.trim() : "",
      subject: typeof subject === "string" ? subject.trim() : "",
      message: typeof message === "string" ? message.trim() : "",
    };

    if (Object.values(contactData).some((value) => !value)) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    await Contact.create(contactData);

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;