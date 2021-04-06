/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const dict1 = new Map();
  const dict2 = new Map();
  const set1 = new Set(s1.split(''));
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (dict1.has(s1[i])) {
      dict1.set(s1[i], dict1.get(s1[i]) + 1);
    } else {
      dict1.set(s1[i], 1);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (dict2.has(s2[i])) {
      dict2.set(s2[i], dict2.get(s2[i]) + 1);
    } else {
      dict2.set(s2[i], 1);
    }
  }
  set1.forEach((s) => {
    if (dict2.has(s)) {
      count += Math.min(dict1.get(s), dict2.get(s));
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
