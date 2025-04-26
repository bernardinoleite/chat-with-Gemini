export class ListChatUseCase {

    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }

    execute() {
        const chat = this.chatRepository.list();
        return chat;
    }
}