const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALIDATION_RULES = {
  UPPERCASE: {
    validate: (value) => /[A-Z]/.test(value),
    message: "at least one uppercase letter",
  },
  LOWERCASE: {
    validate: (value) => /[a-z]/.test(value),
    message: "at least one lowercase letter",
  },
  NUMBER: {
    validate: (value) => /[0-9]/.test(value),
    message: "at least one number",
  },
  SPECIAL: {
    validate: (value) => /[^A-Za-z0-9]/.test(value),
    message: "at least one special symbol",
  },
  LENGTH: {
    validate: (value) => /^.{8,}$/.test(value),
    message: "at least 8 characters long",
  },
};

const ERROR_MESSAGE = {
  NAME: "Please enter your name.",
  EMAIL: "Please enter a valid email address.",
  PASSWORD: "Please enter a password.",
  CONFIRM_PASSWORD: "Passwords do not match.",
  AGREE: "Please agree to the above information.",
};

const VALIDATIONS = [
  {
    id: "name",
    validate: (value) => {
      if (!value) {
        return ERROR_MESSAGE.NAME;
      } else {
        const errors = checkRules(value, ["UPPERCASE", "LOWERCASE"]);
        return createErrorMessage(errors);
      }
    },
  },
  {
    id: "email",
    validate: (value) =>
      EMAIL_VALIDATION.test(value) ? true : ERROR_MESSAGE.EMAIL,
  },
  {
    id: "password",
    validate: (value) => {
      if (!value) {
        return ERROR_MESSAGE.PASSWORD;
      } else {
        const errors = checkRules(value, [
          "UPPERCASE",
          "LOWERCASE",
          "NUMBER",
          "SPECIAL",
          "LENGTH",
        ]);
        return createErrorMessage(errors);
      }
    },
  },
  {
    id: "confirmPassword",
    validate: (value) => {
      const password = document.getElementById("password").value;
      return value === password ? true : ERROR_MESSAGE.CONFIRM_PASSWORD;
    },
  },
  {
    id: "agree",
    validate: () =>
      document.getElementById("agree").checked ? "true" : ERROR_MESSAGE.AGREE,
  },
];
