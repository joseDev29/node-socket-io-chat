//const socket = io("http://localhost:5000/"); En caso de que el socket este en otra direccion
const socket = io();

let username,
  chatInputMessage,
  sendMessageBtn,
  chatOutputMessages,
  chatOutputActions;

function activeChatFunctions() {
  username = document.getElementById("usernameTitle").textContent;

  chatInputMessage = document.getElementById("chatInputMessage");

  sendMessageBtn = document.getElementById("sendMessageBtn");

  chatOutputMessages = document.getElementById("messages");

  chatOutputActions = document.getElementById("actions");

  sendMessageBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (chatInputMessage.value.length > 0) {
      const contentMessage = {
        username: username,
        message: chatInputMessage.value,
      };

      sendMessage(contentMessage);
    }
  });

  chatInputMessage.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && chatInputMessage.value.length > 0) {
      const contentMessage = {
        username: username,
        message: chatInputMessage.value,
      };

      sendMessage(contentMessage);
    }
  });

  chatInputMessage.addEventListener("input", () => {
    if (chatInputMessage.value.length > 0) {
      socket.emit("chat:typing", username);
    } else {
      socket.emit("chat:typing", false);
    }
  });

  socket.on("chat:message", (data) => {
    chatOutputMessages.insertAdjacentHTML(
      "beforeend",
      `
      <p class="notranslate chat-message"> 
        <strong>${data.username}:</strong> ${data.message}
      </p>
    `
    );

    chatOutputMessages.scrollTop = chatOutputMessages.scrollHeight;
  });

  socket.on("chat:typing", (username) => {
    if (username) {
      chatOutputActions.innerHTML = ` 
        <p class="typing-action"> 
          ${username} está escribiendo...
        </p> 
        `;
    } else {
      chatOutputActions.innerHTML = "";
    }
  });
}

function sendMessage(message) {
  socket.emit("chat:message", message);
  socket.emit("chat:typing", false);
  chatInputMessage.value = "";
  chatOutputMessages.insertAdjacentHTML(
    "beforeend",
    `
      <p class="notranslate chat-message my-message"> 
        <strong>${message.username}:</strong> ${message.message}
      </p>
  `
  );
  chatOutputMessages.scrollTop = chatOutputMessages.scrollHeight;
}
