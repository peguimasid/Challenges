function variableName(name) {
  const regexp = /^(?=.{1,32}$)([a-zA-Z_][a-zA-Z0-9_]*)$/;

  return regexp.test(name);
}

console.log(variableName("var_1__Int"))
