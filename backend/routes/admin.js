const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Contact = require("../contact");
const requireAdmin = require("../middleware/adminAuth");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const validUsername = username === process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD_HASH
    ? await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
    : false;

  if (!validUsername || !validPassword) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    { username, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "8h" },
  );

  return res.json({ token });
});

router.get("/contacts", requireAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.json({ contacts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Unable to load contact requests" });
  }
});

router.delete("/contacts/:id", requireAdmin, async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact request not found" });
    }

    return res.json({ message: "Contact request deleted" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Invalid contact request id" });
  }
});

module.exports = router;