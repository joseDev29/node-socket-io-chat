const socket = io("http://localhost:5000/");

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
    const contentMessage = {
      username: username,
      message: chatInputMessage.value,
    };

    console.log(contentMessage);

    socket.emit("chat:message", contentMessage);
  });

  socket.on("chat:message", (data) => {
    console.log("Data: ", data);
    chatOutputMessages.insertAdjacentHTML(
      "beforeend",
      `
    <p> <strong>${data.username}:</strong> ${data.message}</p>
    `
    );
  });
}

/*
chatInputMessage.addEventListener("keypress", (e) => {
  socket.emit("chat:typing", {
    username: chatInputUsername.value,
  });
});
*/

/*
socket.on("chat:typing", (data) => {
  chatActions.innerHTML = `
      <p> <strong>${data.username} está escribiendo ...</strong></p>
      `;
});
*/
