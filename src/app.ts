import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "Hello world!" });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});