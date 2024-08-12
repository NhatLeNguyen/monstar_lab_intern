const CHECK_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALIDATION_RULES = {
  uppercase: {
    validate: (value) => /[A-Z]/.test(value),
    message: "at least one uppercase letter",
  },
  lowercase: {
    validate: (value) => /[a-z]/.test(value),
    message: "at least one lowercase letter",
  },
  number: {
    validate: (value) => /[0-9]/.test(value),
    message: "at least one number",
  },
  special: {
    validate: (value) => /[^A-Za-z0-9]/.test(value),
    message: "at least one special symbol",
  },
  length: {
    validate: (value) => value.length >= 8,
    message: "at least 8 characters long",
  },
};

const VALIDATIONS = [
  {
    id: "name",
    validate: (value) => {
      if (value === "") {
        return "Please enter your name.";
      }
      const errors = checkRules(value, ["uppercase", "lowercase"]);
      return createErrorMessage(errors);
    },
  },
  {
    id: "email",
    validate: (value) =>
      CHECK_EMAIL.test(value) ? true : "Please enter a valid email address.",
  },
  {
    id: "password",
    validate: (value) => {
      if (value === "") {
        return "Please enter a password.";
      }
      const errors = checkRules(value, [
        "uppercase",
        "lowercase",
        "number",
        "special",
        "length",
      ]);
      return createErrorMessage(errors);
    },
  },
  {
    id: "confirmPassword",
    validate: (value) => {
      const password = document.getElementById("password").value;
      return value === password ? true : "Passwords do not match.";
    },
  },
  {
    id: "agree",
    validate: () =>
      document.getElementById("agree").checked
        ? true
        : "Please agree to the above information.",
  },
];
