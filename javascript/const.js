const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const checkPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

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
    validate: (value) => checkPassword.test(value),
    errorMessage:
      "Must contain at least one number, one uppercase and lowercase letter, one special symbol, and be at least 8 characters long.",
  },
  {
    id: "confirmPassword",
    errorId: "confirmPasswordError",
    validate: (value) => value === password,
    errorMessage: "Passwords do not match.",
  },
  {
    id: "agree",
    errorId: "agreeError",
    validate: () => document.getElementById("agree").checked,
    errorMessage: "Please agree to the above information.",
  },
];
export default { validations };
