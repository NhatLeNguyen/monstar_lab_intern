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
    const isValidation = field.validate(element.value);

    if (isValidation !== true) {
      isValid = false;
      errorElement.innerHTML = Array.isArray(isValidation)
        ? `<ul> Must contain: ${isValidation
            .map((error) => `<li>${error}</li>`)
            .join("")} </ul>`
        : `${isValidation}`;
      element.classList.add("error");
    } else {
      errorElement.innerHTML = "";
      element.classList.remove("error");
    }
  });
  registerValidations.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = element.parentElement.querySelector(".error-message");
    const isValidation = field.validate(element.value);

    if (isValidation !== true) {
      isValid = false;
      if (Array.isArray(isValidation)) {
        errorElement.innerHTML = `<ul> Must contain: ${isValidation
          .map((error) => `<li>${error}</li>`)
          .join("")} </ul>`;
      } else {
        errorElement.innerHTML = `${isValidation}`;
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
