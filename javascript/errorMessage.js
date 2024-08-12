function checkRules(value, rules) {
  const errors = [];

  for (const ruleName of rules) {
    const rule = VALIDATION_RULES[ruleName];
    if (!rule.validate(value)) {
      errors.push(rule.message);
    }
  }
  return errors;
}

function createErrorMessage(errors) {
  if (errors.length === 0) {
    return true;
  }
  return errors;
}
