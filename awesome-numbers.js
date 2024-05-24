/**
 * @param {number} num 
 * @returns boolean
 */
const isEven = (num) => !(num % 2);

/** 
 * @param {number} num
 * @returns boolean
*/
const isOdd = (num) => !isEven(num);

/**
 * @param {number} num
 * @returns number
 */
const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * @param {number} num
 * @returns boolean
 */
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (isEven(num)) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

/** 
 * @param {number} num
 * @returns boolean
*/
const isMultipleOf = (num, multiple) => num % multiple === 0;

console.log("isEven", isEven(2)); // true
console.log("isEven", isEven(3)); // false
console.log("isOdd", isOdd(2)); // false
console.log("isOdd", isOdd(3)); // true
console.log("fibonacci", fibonacci(0)); // 0
console.log("fibonacci", fibonacci(1)); // 1
console.log("fibonacci", fibonacci(2)); // 1
console.log("fibonacci", fibonacci(3)); // 2
console.log("isPrime", isPrime(2)); // true
console.log("isPrime", isPrime(3)); // true
console.log("isPrime", isPrime(4)); // false
console.log("isPrime", isPrime(5)); // true
console.log("isMultipleOf", isMultipleOf(4, 2)); // true
console.log("isMultipleOf", isMultipleOf(4, 3)); // false