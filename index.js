import { isEven, isOdd, fibonacci, isPrime, isMultipleOf } from "./awesome-numbers.js";

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