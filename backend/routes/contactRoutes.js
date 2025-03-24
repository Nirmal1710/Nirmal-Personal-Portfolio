import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST request to save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
// In this example, we created a new file named contactRoutes.js in the routes folder. We imported the express module and the Contact model from the models folder. We then created a new router using express.Router() and defined a POST route to handle saving contact form data.