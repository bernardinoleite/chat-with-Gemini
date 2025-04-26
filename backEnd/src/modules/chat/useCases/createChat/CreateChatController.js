export class CreateChatController {
    constructor(createChatUseCase) {
        this.createChatUseCase = createChatUseCase;
    }

    async handle(request, response) {

        const { prompt } = request.body;
        const result = await this.createChatUseCase.execute(prompt);
        return response.status(201).json(result);
    }
}