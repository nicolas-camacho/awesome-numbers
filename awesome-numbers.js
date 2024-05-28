class AwesomeNumber extends Number{
  /** 
   * @returns boolean
   */
  isEven() {
    return !(this.value & 1);
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
    if (this.value <= 1) return false;
    if (this.value <= 3) return true;
    if (this.isEven()) return false;
    for (let i = 3; i <= Math.sqrt(this.value); i += 2) {
      if (this.value % i === 0) return false;
    }
    return true;
  }

  /** 
   * @param {number} multiple
   * @returns boolean
  */
  isMultipleOf(multiple) {
    return this.value % multiple === 0;
  }
}

export default AwesomeNumber;