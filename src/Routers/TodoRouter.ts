import Router from "express";
import prisma from "../Modules/prisma.js"

const TodoRouter = Router();

TodoRouter.get("/", async (req, res) => {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
});