import { GeminiService } from "../../../../service/geminiService.js";
import { ChatRepository } from "../../repositories/chatRepository.js";
import { CreateChatUseCase } from "./CreateChatUseCase.js";
import { CreateChatController } from "./CreateChatController.js";

const geminiService = new GeminiService()
const chatRepository = ChatRepository.getStance()
const createChatUseCase = new CreateChatUseCase(chatRepository, geminiService)
const createChatController = new CreateChatController(createChatUseCase)

export {
    createChatController
}