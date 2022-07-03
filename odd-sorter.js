/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the 
even numbers at their original positions.
*/
function sortArray(array) {
  // Need to fix the case when we have repeats of numbers.
  // Now we need to remove the odd numbers, and keep track of their index.
  let odd_arr = [];
  let index_arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      odd_arr.push(array[i]);
      index_arr.push(i);
    }
  }
  return [index_arr, odd_arr];
}

console.log(sortArray([1, 2, 3, 4, 5, 6, 7, 8]));
