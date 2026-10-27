/*
Problem: Reverse String
Platform: LeetCode
Topic: Strings
Difficulty: Easy

Problem Link: 
https://leetcode.com/problems/reverse-string/description/

Goal:
Reverse the input character array in place.

// Time Complexity: O(n)
// Space Complexity: O(1)
*/

var reverseString = function(s) {
    return s.reverse()
};

// TEST EXAMPLE:
let s = ["h","e","l","l","o"]
console.log(reverseString(s)); // ["o","l","l","e","h"]
