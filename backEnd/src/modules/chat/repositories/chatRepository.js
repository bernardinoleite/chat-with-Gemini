import { Chat } from "../model/Chat.js";

export class ChatRepository {

    #chat;
    INSTANCE;
    constructor() {
        this.#chat = []
    }

    static getStance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new ChatRepository()
        }

        return this.INSTANCE
    }

    create({ content, role }) {
        const chat = new Chat()
        Object.assign(chat, {
            content,
            role,
            created_at: new Date()
        })
        this.#chat.push(chat)
    }

    list() {
        return this.#chat
    }
}