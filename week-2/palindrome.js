/**
    Title: palindrome.js
    Author: April Yang
    Date: 06/01/2022
    Description: Javascript File for palindrome.html
 */

function getTodaysDate() {
  return new Date().toLocaleDateString("en-us");
}

function getLength(string) {
  let stringLength = string.length;
  return stringLength;
  // return string.length;
}

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

function isPalindrome(string) {
  if (string === reverse(string)) {
    return true;
  } else {
    return false;
  }
}

function checkPhrase() {
  let txtPhrase = document.getElementById("txtPhrase").value;
  let assignResults = document.getElementById("assign-results");
  let today = getTodaysDate();
  let len = getLength(txtPhrase);
  console.log(len);
  let reversedPhrase = reverse(txtPhrase);
  let header = `Date:${today}</br>
    Original Phrase:${txtPhrase}</br>
    Reversed Phrase:${reversedPhrase}</br>
    Phrase Length:${len}`;
  console.log(header);
  document.getElementById("assign-results-header").innerHTML = header;

  let palindromeResults = isPalindrome(txtPhrase.toLowerCase());

  if (palindromeResults === true) {
    assignResults.innerHTML = txtPhrase + " <u><b>is</b></u> a palindrome!";
  } else {
    assignResults.innerHTML = txtPhrase + " <u><b>is not</b></u> a palindrome!";
  }
}
