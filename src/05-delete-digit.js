/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const digits = Array.from(String(num), (n) => Number(n));
  let iMin = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < digits[iMin]) {
      iMin = i;
    }
  }
  digits.splice(iMin, 1);
  return Number(digits.join(''));
}

module.exports = deleteDigit;
