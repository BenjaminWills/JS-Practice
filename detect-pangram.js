// A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters
// A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string) {
  // accounting for the case in which a word CANNOT be a pangram.
  if (string.length < 26) {
    return false;
  }
  function onlyUnique(value, index, self) {
    // function for removing non unique values from a list.
    return self.indexOf(value) === index;
  }
  // Now we consider the other cases, where there are at least 26 letters.
  // we need to split the string into an array to analyse each character
  const str_arr = string.split("");
  // we also want to keep track of how many distinct characters exist in the list. We can use the filter method.
  if (str_arr.filter(onlyUnique).length < 26) {
    return false;
  }
  return true;
}

console.log(isPangram("abcdefghijklmopqrstuvwxyz"));
