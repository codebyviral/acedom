import express from "express";
import { connectToDatabase } from "./db/db.js";

const app = express();

const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log(`This is Acedom's Backend ⚔️`);
    res.send("Welcome to Acedom's Backend!");
})

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port} 🛜`);
    })
})