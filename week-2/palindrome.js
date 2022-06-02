/**
    Title: palindrome.js
    Author: April Yang
    Date: 06/01/2022
    Description: Javascript File for palindrome.html
 */

// Expect to return for today's date with formate of "en-us"
function getTodaysDate() {
  return new Date().toLocaleDateString("en-us");
}

// Returns string Length
function getLength(string) {
  let stringLength = string.length;
  return stringLength;
  // return string.length;
}

// Reverses a string input
// Expect return: hello => olleh
function reverse(string) {
  let splitStr = string.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join("");
  return joinStr.toLowerCase();
  // let arrayString = [...string]
  // arrayString.reverse();
  // let reverseString = arrayString.join("");
  // return reverseString;
}

// If the string is a palindrome string returns true, else returns false.
function isPalindrome(string) {
  if (string === reverse(string)) {
    return true;
  } else {
    return false;
  }
}

// onclick on the button with id btnCheckPhrase to active function checkPhrase
function checkPhrase() {
  let txtPhrase = document.getElementById("txtPhrase").value;
  let assignResults = document.getElementById("assign-results");
  let today = getTodaysDate();
  // reverses the txtPhrase string
  let len = getLength(txtPhrase);
  let reversedPhrase = reverse(txtPhrase);
  // Use template literal to display the content of header
  let header = `Date:${today}</br>
    Original Phrase:${txtPhrase}</br>
    Reversed Phrase:${reversedPhrase}</br>
    Phrase Length:${len}`;
  console.log(header);
  document.getElementById("assign-results-header").innerHTML = header;
  // Call function isPalindrome() and display the result with true or false condition.
  let palindromeResults = isPalindrome(txtPhrase.toLowerCase());
  if (palindromeResults === true) {
    assignResults.innerHTML = txtPhrase + " <u><b>is</b></u> a palindrome!";
  } else {
    assignResults.innerHTML = txtPhrase + " <u><b>is not</b></u> a palindrome!";
  }
}
