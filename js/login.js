(function () {
  const form = document.getElementById("loginForm");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    const emailValue = emailInput.value.trim();

    if (emailValue !== storedUser.email) {
      emailError.textContent = "Invalid email";
      isValid = false;
    }

    const passwordValue = passwordInput.value.trim();

    if (passwordValue !== storedUser.password) {
      passwordError.textContent = "Invalid password";
      isValid = false;
    }

    if (isValid) {
      alert("You are logged in.");

      localStorage.setItem("logged_in_user", JSON.stringify(storedUser));
      window.location.href = "index.html";
      // form.submit()
    }
  });
})();
