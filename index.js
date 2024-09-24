import AwesomeNumber from "./awesome-numbers.js";

const myAwesomeNumber = new AwesomeNumber(4);

console.log("OPP", myAwesomeNumber);

console.log("isEven", myAwesomeNumber.isEven()); // true
console.log("isOdd", myAwesomeNumber.isOdd()); // false
console.log("isPrime", myAwesomeNumber.isPrime()); // true
console.log("isMultipleOf 2", myAwesomeNumber.isMultipleOf(2)); // true
console.log("isMultipleOf 3", myAwesomeNumber.isMultipleOf(3)); // false
console.log("sum with raw number", myAwesomeNumber + 2); // 6

const newNumber = myAwesomeNumber + new AwesomeNumber(2);

console.log("sum with AwesomeNumber", newNumber + myAwesomeNumber); // 6