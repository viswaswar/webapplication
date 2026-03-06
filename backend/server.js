const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Simple API endpoint
app.post("/api/message", (req, res) => {
  const userMessage = req.body.text;
  res.json({ reply: `You sent: "${userMessage}"` });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
