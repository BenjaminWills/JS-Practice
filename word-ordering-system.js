/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

function order(words) {
  // Splitting array into individual words.
  const arr = words.split(" ");
  // for each word we look for a number
  const num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // We now create an array of arrays that contain the letters of each word.
  const letterSplit = words.split(" ").map((x) => x.split(""));
  // Want to find the indexes of every word in an array.
  const indexValues = letterSplit.map(function numberFinder(x) {
    for (let i = 1; i <= 9; i++) {
      if (x.includes(i.toString())) {
        return i;
      }
    }
  });
  // Next we want to remove the numbers from the elements of the array.
  let rm_arr = [];
  for (let i = 0; i < letterSplit.length; i++) {
    delete letterSplit[i][indexValues[i]];
    rm_arr.push(letterSplit[i]);
  }
  return rm_arr;
}

console.log(order("He2llo h3ow ar1e yo4u"));
/*const b = [1, 2, 3];
console.log(b.indexOf(b[1])); */
