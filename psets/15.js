/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
var greaterNum = function (num1, num2) {
  if (num1 > num2) {
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
    return num1;
  } else if (num2 > num1) {
      console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
      return num2;
  } else {
    console.log("Both numbers are the same.");
  }
};

greaterNum(5, 10);
greaterNum(34, 4);
