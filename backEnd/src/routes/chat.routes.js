import { Router } from "express"
import { createChatController } from "../modules/chat/useCases/createChat/index.js";
import { listChatController } from "../modules/chat/useCases/listChat/index.js";
const chatRouter = Router();


chatRouter.post("/", (request, response) => {
    createChatController.handle(request, response);
})

chatRouter.get("/", (request, response) => {
    listChatController.handle(request, response);
})

export { chatRouter }