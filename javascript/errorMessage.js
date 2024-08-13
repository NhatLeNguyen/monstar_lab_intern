function checkRules(value, rules) {
  const errors = rules.reduce((accumulator, ruleName) => {
    const rule = VALIDATION_RULES[ruleName];
    if (!rule.validate(value)) {
      accumulator.push(rule.message);
    }
    return accumulator;
  }, []);

  return errors;
}

function createErrorMessage(errors) {
  if (errors.length) {
    return errors;
  }
}
