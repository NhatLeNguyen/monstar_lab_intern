const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validations = [
  {
    id: "name",
    errorId: "nameError",
    validate: (value) => value !== "",
    errorMessage: "Please enter your name.",
  },
  {
    id: "email",
    errorId: "emailError",
    validate: (value) => checkEmail.test(value),
    errorMessage: "Please enter a valid email address.",
  },
  {
    id: "password",
    errorId: "passwordError",
    validate: (value) => {
      let errors = [];
      if (!/(?=.*[A-Z])/.test(value)) {
        errors.push("at least one uppercase letter");
      }
      if (!/(?=.*[a-z])/.test(value)) {
        errors.push("at least one lowercase letter");
      }
      if (!/(?=.*[0-9])/.test(value)) {
        errors.push("at least one number");
      }
      if (!/(?=.*[^A-Za-z0-9])/.test(value)) {
        errors.push("at least one special symbol");
      }
      if (value.length < 8) {
        errors.push("at least 8 characters long");
      }

      return errors.length === 0 ? true : errors;
    },
    errorMessage: "",
  },
  {
    id: "confirmPassword",
    errorId: "confirmPasswordError",
    validate: (value) => {
      const password = document.getElementById("password").value;
      return value === password;
    },
    errorMessage: "Passwords do not match.",
  },
  {
    id: "agree",
    errorId: "agreeError",
    validate: () => document.getElementById("agree").checked,
    errorMessage: "Please agree to the above information.",
  },
];

function validateRegister() {
  let isValid = true;

  validations.forEach((validation) => {
    const { id, errorId, validate, errorMessage } = validation;
    const value =
      id === "password"
        ? document.getElementById(id).value
        : document.getElementById(id).value;

    let result = validate(value);

    if (Array.isArray(result)) {
      const len = 5;
      if (result.length == len) {
        document.getElementById(
          errorId
        ).textContent = `Please enter a password.`;
      } else {
        document.getElementById(
          errorId
        ).textContent = `Password must contain ${result.join(", ")}`;
      }
      isValid = false;
    } else if (!result) {
      document.getElementById(errorId).textContent = errorMessage;
      isValid = false;
    } else {
      document.getElementById(errorId).textContent = "";
    }
  });

  if (isValid) {
    alert("Create account successfully!");
  }
  return isValid;
}
