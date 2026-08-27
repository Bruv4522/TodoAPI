import express from "express";
import "dotenv/config"

import TodoRouter from "./Routers/TodoRouter.js";
import RateLimiter from "./Middleware/RateLimiter.js";
import prisma from "./Modules/prisma.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(RateLimiter);

app.get("/ping", async (req, res) => {
    await prisma.$queryRaw`SELECT 1`;
    return res.json({ message: "Pong" });
})

app.use(TodoRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});