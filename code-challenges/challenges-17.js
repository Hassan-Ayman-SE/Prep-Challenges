"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
//
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
  // write your code here
  const pattern = [];

  const generatePattern = (current, direction) => {
    pattern.push(current);

    if (direction === -1 && current <= 0) {
      generatePattern(current + int2, 1);
    } else if (direction === 1 && current >= int1) {
      return;
    } else {
      generatePattern(current + direction * int2, direction);
    }
  };

  generatePattern(int1, -1);
  return pattern;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
//

const filterLinks = (str) => {
  // write your code here
  return str.split('"')[1]?.split("//")[1] || null;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
  // write your code here
  str = str.toLowerCase();

  // using regex remove all non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/g, "");

  // Check if is a palindrome
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; //  don't match
    }
  }

  return true;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX:
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
  // write your code here
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let strIsEqual = str[i] == str[str.length - 1 - i];
    let arrIsEqual = arr[i] == arr[str.length - 1 - i];

    if (strIsEqual != arrIsEqual) {
      return false;
    }
  }

  return true;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };
