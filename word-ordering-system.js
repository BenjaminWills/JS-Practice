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
  for (let i = 0; i < letterSplit.length; i++) {
    letterSplit[i].splice(letterSplit[i].indexOf(indexValues[i].toString()), 1);
  }
  let new_arr = new Array(indexValues.length);
  for (let i = 0; i < indexValues.length; i++) {
    // we want to assign each word to its correct position.
    new_arr[indexValues[i] - 1] = letterSplit[i].join("");
  }
  return new_arr.join(" ");
}

console.log(order("Be4n m1y na2me i3s"));
/*const b = [1, 2, 3];
console.log(b.indexOf(b[1])); */

//console.log(["h", "e", "l", "l", "o"].splice(1, 1));
