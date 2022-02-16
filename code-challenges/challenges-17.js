'use strict';

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
    let recursionArray = [];
     let s = 0;
     return recursionPatternHelper(int1, int2 , recursionArray , s);
     
  }
  
  
  const recursionPatternHelper = (int1, int2, arr, s) => {
     arr.push(int1);  
      
    if (int1 === arr[0] && (arr.length !== 1)  ){
    return arr;
    } else if ( int1 >= 1  && s == 0){
         return recursionPatternHelper(int1 - int2 , int2 , arr , s );
   }else{
      s = 1;
      return recursionPatternHelper(int1 + int2 , int2 , arr , s);
  
    } 
  }

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
    const regex = /www[^][a-z]+\.+com/g
    const regex2 = /www[^][a-z]+\.+org/g
    const val1 = regex.test(str);
    const val2 = regex2.test(str);
    var reusult = [];
    if (val1 == true)
     reusult = str.match(regex);
    else if ( val2 == true)
        reusult = str.match(regex2);

 return reusult[0];

}
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
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
    var lowRegStr = str.toLowerCase().replace(re, '');
   
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    
    return reverseStr === lowRegStr;}
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
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };