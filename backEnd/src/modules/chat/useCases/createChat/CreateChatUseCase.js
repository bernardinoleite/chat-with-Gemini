export class CreateChatUseCase {
    constructor(chatRepository, geminiService) {
        this.chatRepository = chatRepository;
        this.geminiService = geminiService;
    }

    async execute(prompt) {
        if (!prompt) {
            throw new Error("É necessario passar um prompt")
        }

        this.chatRepository.create({ content: prompt, role: "user" });
        const contents = this.chatRepository.list()//
        const geminiResult = await this.geminiService.chatService(prompt, contents)

        this.chatRepository.create({ content: geminiResult, role: "model" });

        return {
            content: geminiResult,
            role: "model"
        }
    }
}