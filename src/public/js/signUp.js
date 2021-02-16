const signUpBtn = document.getElementById("signUpBtn");
const usernameInput = document.getElementById("usernameInput");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  signUpVerification();
});

usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    signUpVerification();
  }
});

function signUpVerification() {
  const username = usernameInput.value;
  if (username.length < 7) {
    const signUpAlerts = document.getElementById("signUpAlerts");
    signUpAlerts.innerHTML = `
        <p class="username-error">
            ¡username no valid! <br>
            min 7 characters
        </p>
      `;
  } else {
    insertChat(username);
  }
}
