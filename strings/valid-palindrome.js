/*
Problem: Valid Palindrome
Platform: LeetCode
Topic: Strings
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/valid-palindrome/description/

Goal:
Determine whether a string is a palindrome after converting uppercase letters to lowercase and remove all non-alphanumeric characters.

// Time Complexity: O(n)
// Space Complexity: O(n)
*/

var isPalindrome = function(s) {
    let newText = s.toLowerCase().trim().replace(/[^a-z0-9]/gi, "");
    let reverseText = newText.split("").reverse().join("");
    if(newText == reverseText){
        return true
    }else{
        return false
    }

};

// TEST EXAMPLE:
let s = "race a car";
console.log(isPalindrome(s)); // false
