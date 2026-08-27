import express from "express";
import "dotenv/config"

import TodoRouter from "./Routers/TodoRouter.js";
import RateLimiter from "./Middleware/RateLimiter.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(RateLimiter);

app.get("/ping", (req, res) => {
    return res.json({ message: "Pong" });
})

app.use(TodoRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});