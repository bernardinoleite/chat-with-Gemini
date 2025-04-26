import { apiUrl } from "./config.js";



async function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (text === "") return;

    const resultIA = await fetchRequestPost(apiUrl, text)

    addMessage(text, "user-message");
    input.value = "";

    addMessage(resultIA.content, "ai-message");

    // Simula uma resposta da IA após 1 segundo
    // setTimeout(() => {
    //     addMessage("Esta é uma resposta automática da IA.", "ai-message");
    // }, 1000);
}

function addMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const message = document.createElement("div");
    message.className = "message " + className;
    message.textContent = text;
    chatBox.appendChild(message);
    // Garante a rolagem automática para a última mensagem adicionada
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function fetchRequestPost(url = apiUrl, prompt) {

    const result = await (await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ prompt })
    })).json();
    return result
}
async function fetchRequestGet(url = apiUrl) {
    return await (await fetch(url)).json()
}

async function listChat() {

    const chats = await fetchRequestGet()

    chats.forEach(objecto => {
        if (objecto.role === "user") {
            addMessage(objecto.content, "user-message");
        }
        else {
            addMessage(objecto.content, "ai-message");
        }
    })

}

listChat();
btn.addEventListener("click", sendMessage) 