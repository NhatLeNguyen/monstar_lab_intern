function validateRegister() {
  let isValid = true;

  const registerValidations = VALIDATIONS.filter(
    (validation) =>
      validation.id === "name" ||
      validation.id === "email" ||
      validation.id === "password" ||
      validation.id === "confirmPassword" ||
      validation.id === "agree"
  );

  registerValidations.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = element.parentElement.querySelector(".error-message");
    const errorMessage = field.validate(element.value);

    if (errorMessage !== "") {
      isValid = false;
      if (Array.isArray(errorMessage)) {
        errorElement.innerHTML = `<ul> Must contain: ${errorMessage
          .map((error) => `<li>${error}</li>`)
          .join("")} </ul>`;
      } else {
        errorElement.innerHTML = `${errorMessage}`;
      }
      element.classList.add("error");
    } else {
      errorElement.innerHTML = "";
      element.classList.remove("error");
    }
  });

  if (isValid) {
    alert("Create account successfully!");
  }
  return isValid;
}
