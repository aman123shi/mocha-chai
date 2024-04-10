import express from "express";
import { fizzBuzz } from "./common";

const app = express();
app.use(express.json());

app.post("/api/fizzbuzz", (req, res) => {
  try {
    const n = parseInt(req.body.number);
    if (isNaN(n) || typeof n !== "number") {
      return res.status(400).json({ error: "Input must be a number" });
    }
    if (n <= 0) {
      return res.status(400).json({ error: "Input must be a positive number" });
    }
    const result = fizzBuzz(n);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

export default app;
