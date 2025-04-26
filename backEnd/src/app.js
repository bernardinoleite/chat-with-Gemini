import express from "express"
import { chatRouter } from "./routes/chat.routes.js";
import cors from "cors"
const app = express();
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/chat", chatRouter)

app.get("/", (request, response) => {
    response.json({ message: "hello world" })
})

app
    .listen(port, "0.0.0.0")
    .on("listening", () => {
        console.log(`server is running on address http://localhost:${port}`)
    })
