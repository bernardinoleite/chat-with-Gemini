export class ListChatController {

    constructor(listChatUseCase) {
        this.listChatUseCase = listChatUseCase;
    }

    handle(request, response) {
        const chat = this.listChatUseCase.execute();
        return response.status(200).json(chat);
    }
}