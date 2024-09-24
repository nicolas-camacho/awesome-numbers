class AwesomeNumber extends Number{
  /** 
   * @returns boolean
   */
  isEven() {
    return !(this & 1);
  }

  /**
   * @returns boolean
   */
  isOdd() {
    return !this.isEven();
  }

  /**
   * @returns boolean
   */
  isPrime() {
    if (this <= 1) return false;
    if (this <= 3) return true;
    if (this.isEven()) return false;
    for (let i = 3; i <= Math.sqrt(this); i += 2) {
      if (this % i === 0) return false;
    }
    return true;
  }

  /** 
   * @param {number} multiple
   * @returns boolean
  */
  isMultipleOf(multiple) {
    return this % multiple === 0;
  }
}

export default AwesomeNumber;