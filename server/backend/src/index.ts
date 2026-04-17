import "dotenv/config";  // ← add this as the very first line
import express from "express";
import contactRouter from "./routes/contact";
import authRouter from "./routes/auth";

const app = express();
const port = 3001;

app.use(express.json()); // ← you're also missing this, needed for req.body to work

app.use("/api/auth", authRouter);
app.use("/api", contactRouter);
app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Server running on port ${port}`));
