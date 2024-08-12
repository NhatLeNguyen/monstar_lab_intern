function validateLogin() {
  let isValid = true;

  const loginValidations = VALIDATIONS.filter(
    (validation) => validation.id === "email" || validation.id === "password"
  );

  loginValidations.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = element.parentElement.querySelector(".error-message");
    const validationResult = field.validate(element.value);

    if (validationResult !== true) {
      isValid = false;
      errorElement.textContent = validationResult;
      element.classList.add("error");
    } else {
      errorElement.textContent = "";
      element.classList.remove("error");
    }
  });

  if (isValid) {
    alert("Login successful!");
  }
  return isValid;
}
