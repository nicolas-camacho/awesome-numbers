const awesomeNumbers = (function (){
  /**
   * @param {number} num 
   * @returns boolean
   */
  const isEven = (num) => !(num & 1);

  /** 
   * @param {number} num
   * @returns boolean
  */
  const isOdd = (num) => !isEven(num);

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
   * @param {number} multiple
   * @returns boolean
  */
  const isMultipleOf = (num, multiple) => num % multiple === 0;

  return {
    isEven,
    isOdd,
    isPrime,
    isMultipleOf
  }
})();
