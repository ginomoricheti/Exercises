// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let n1 = parseInt(array1.join(""));
  let n2 = parseInt(array2.join(""));

  return n1 + n2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let word = value.toString();
  let reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else if (isNaN(Number(input))||Number(input) === 0) {
    return "Must be a number besides 0";
  }

  return "";
}
