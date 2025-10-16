const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { title, description, ownerId, options } = req.body;

    if (!title || !description || !ownerId || !options) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    
    // Simulate saving the poll (e.g., to a database)
    res.status(201).json({ message: "Poll created successfully" });
});

module.exports = router;