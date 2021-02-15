const signUpBtn = document.getElementById("signUpBtn");
const usernameInput = document.getElementById("usernameInput");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const signUpContainer = document.getElementById("signUp");

  if (username.length < 10) {
    signUpContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <p class="username-error">
            ¡username no valid! <br>
            min 10 characters
        </p>
      `
    );
  } else {
    insertChat(username);
  }
});
