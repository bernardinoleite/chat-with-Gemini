import { randomUUID } from "node:crypto";

export class Chat {

    id;
    content;
    role;
    created_at;

    constructor() {
        if (!this.id) this.id = randomUUID();
    }
}