// This code will take a string of brackets and determine if they are in the correct order: "()()..."

function validParentheses(parens) {
  const parens_arr = parens.split("");
  for (let i = 0; i < parens_arr.length; i++) {
    if (parens_arr.length < 2) {
      return false;
    }
    if ((i % 2 === 0 || i === 0) && parens_arr[i] != "(") {
      return false;
    }
    if (i % 2 != 0 && parens_arr[i] != ")") {
      return false;
    }
  }
  return true;
}
console.log(validParentheses(")("));
console.log("()".split(""));

// for a bracket to be valid we need to have an equal number of "(" and ")" so "(())" is valid but
// "((())" is not. so we need almost a bracket vector, that gives the magnitude of the brackets
// and the direction in which they face, so the computer sees "(())" so 2 and 2, thats legal, it then
// checks if the orientation is legal, so it will check for
