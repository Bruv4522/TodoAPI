import Router from "express";
import prisma from "../Modules/prisma.js"

const TodoRouter = Router();

// Returns all Todos

TodoRouter.get("/", async (req, res) => {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
});

// Returns a Todo by id, if the Todo does not exist it returns an error message

TodoRouter.get("/:id", async (req, res) => {
    const id = Number(req.params.id);

    const foundTodo = await prisma.todo.findUnique({
        where: {
            id: id
        }
    });

    if (!foundTodo) {
        return res.status(404).json({ error: `Todo of id ${id} does not exist` });
    }

    return res.json(foundTodo);
});

// Creates a Todo

TodoRouter.post("/create", async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "Request body not found" });
    }

    const { title, body } = req.body;

    if (!title) {
        return res.status(404).json({ error: "Todo title not found" });
    }

    if (!body) {
        return res.status(404).json({ error: "Todo body not found" });
    }
    
    await prisma.todo.create({
        data: {
            title: title,
            body: body
        }
    });

    return res.status(201).json({ message: `Successfully created new Todo of title ${title}` });
});

export default TodoRouter;