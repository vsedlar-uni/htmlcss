const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  emailError.textContent = "";
  passwordError.textContent = "";

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  }

  if (isValid) {
    // TODO: store information in localstorage
    // add redirect to home page
    alert("You are logged in.");
    window.location.href = "index.html";
    // form.submit()
  }
});

