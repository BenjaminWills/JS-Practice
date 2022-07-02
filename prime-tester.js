function isPrime(num) {
  //TODO:
  // Create a list of factors. as soon as the number of factors is greater than 2 the
  // number is not prime. Further, the largest factor the number can have is its own square
  // root.
  let factors = [];
  let i = 1;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      factors.push(i);
    }
    if (factors.length > 2) {
      return false;
    }
  }
  return true;
}
console.log(isPrime());
