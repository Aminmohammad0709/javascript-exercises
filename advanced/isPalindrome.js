/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */

function isPalindrome(num) {

    let str = num.toString()

    return str === str.split('').reverse().join('')



}

console.log(isPalindrome(-1212))
module.exports = isPalindrome;