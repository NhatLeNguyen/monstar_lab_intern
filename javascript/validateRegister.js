function validateForm() {
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("agreeError").textContent = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const agree = document.getElementById("agree").checked;

  console.log(agree);

  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isValid = true;

  if (name == "") {
    document.getElementById("nameError").textContent =
      "Please enter your name.";
    isValid = false;
  }

  if (!checkEmail.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (!validatePassword(password)) {
    document.getElementById("passwordError").textContent =
      "Must contain at least one number, one uppercase and lowercase letter, one digit, one special symbol and at least 8 or more characters";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  if (!agree) {
    document.getElementById("agreeError").textContent =
      "Please agree to the above information.";
    isValid = false;
  }

  if (isValid) {
    alert("Create account successfully!");
  }
  return isValid;
}

function validatePassword(pw) {
  return (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^A-Za-z0-9]/.test(pw) &&
    pw.length > 4
  );
}
