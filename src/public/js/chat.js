const socket = io("http://localhost:5000/");

const chatInputMessage = document.getElementById("chatInputMessage");

const chatInputUsername = document.getElementById("chatInputUsername");

const chatSendBtn = document.getElementById("chatSendBtn");

const chatOutput = document.getElementById("chatOutput");

const chatActions = document.getElementById("chatActions");

chatSendBtn.addEventListener("click", () => {
  const contentMessage = {
    username: chatInputUsername.value,
    message: chatInputMessage.value,
  };

  console.log(contentMessage);

  socket.emit("chat:message", contentMessage);
});

chatInputMessage.addEventListener("keypress", (e) => {
  socket.emit("chat:typing", {
    username: chatInputUsername.value,
  });
});

socket.on("chat:message", (data) => {
  console.log("Data: ", data);
  chatOutput.insertAdjacentHTML(
    "beforeend",
    `
  <p> <strong>${data.username}:</strong> ${data.message}</p>
  `
  );
});

socket.on("chat:typing", (data) => {
  chatActions.innerHTML = `
      <p> <strong>${data.username} está escribiendo ...</strong></p>
      `;
});
