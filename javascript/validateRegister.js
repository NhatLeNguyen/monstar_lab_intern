function validateRegister() {
  let isValid = true;

  VALIDATIONS.forEach((field) => {
    const element = document.getElementById(field.id);
    const errorElement = element.parentElement.querySelector(".error-message");
    const validationResult = field.validate(element.value);

    if (validationResult !== true) {
      isValid = false;
      if (Array.isArray(validationResult)) {
        errorElement.innerHTML = `
          <ul> Must contain:
            ${validationResult.map((error) => `<li>${error}</li>`).join("")}
          </ul>
        `;
      } else {
        errorElement.innerHTML = `${validationResult}`;
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
