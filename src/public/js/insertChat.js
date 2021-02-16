function insertChat(username) {
  signUpBtn.removeEventListener("click", (e) => {
    e.preventDefault();

    signUpVerification();
  });

  usernameInput.removeEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      signUpVerification();
    }
  });

  const chatContainer = document.getElementById("chatContainer");

  const chatContent = `
  <h2 id="usernameTitle" class="username-title">${username}</h2>
    <div id="chatOutput" class="chat-output">
      <div id="messages" class="chat-messages-container"></div>
      <div id="actions" class="chat-actions-container"></div>
    </div>

    <div id="chatInput" class="chat-input">
      <input
        type="text"
        name="chatInputMessage"
        id="chatInputMessage"
        class="chat-input-message"
        maxlength="350"
      />
      <a href="#" id="sendMessageBtn" class="send-message-btn"> Send </a>
    </div>

    <div id="chatUsers" class="chat-users"></div>
  `;

  chatContainer.innerHTML = chatContent;

  activeChatFunctions();
}
