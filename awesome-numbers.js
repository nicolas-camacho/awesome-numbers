function Constructor(value) {
  this.value = value;
}

/** 
 * @returns boolean
 */
Constructor.prototype.isEven = function() {
  return !(this.value & 1)
};

/** 
 * @returns boolean
*/
Constructor.prototype.isOdd = function() {
  return !this.isEven();
} 

/**
 * @returns boolean
 */
Constructor.prototype.isPrime = function() {
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
Constructor.prototype.isMultipleOf = function(multiple) {
  return this.value % multiple === 0;
} 

export default Constructor;