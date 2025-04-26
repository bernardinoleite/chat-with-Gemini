import { ChatRepository } from "../../repositories/chatRepository.js";
import { ListChatUseCase } from "./LIstChatUseCase.js";
import { ListChatController } from "./ListChatController.js";

const chatRepository = ChatRepository.getStance()
const listChatUseCase = new ListChatUseCase(chatRepository)
const listChatController = new ListChatController(listChatUseCase)

export {
    listChatController
}