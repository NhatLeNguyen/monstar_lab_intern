function validateLogin() {
  let isValid = true;

  const loginValidations = VALIDATIONS.filter(
    (validation) => validation.id === "email" || validation.id === "password"
  );

  loginValidations.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = element.parentElement.querySelector(".error-message");
    const isValidation = field.validate(element.value);
    console.log(isValidation);

    if (isValidation !== true) {
      isValid = false;
      errorElement.textContent = isValidation;
      element.classList.add("error");
    } else {
      console.log("hehe");
      errorElement.textContent = "";
      element.classList.remove("error");
    }
  });

  if (isValid) {
    alert("Login successful!");
  }
  return isValid;
}
