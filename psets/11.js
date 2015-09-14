/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
var calculateAge = function(birthYr, currentYr) {
  var age1 = currentYr - birthYr;
  var age2 = (currentYr - birthYr) - 1;

  console.log("You are either " + age1 + " or " + age2);
}

calculateAge(1982, 2015);
calculateAge(1958, 2015);
calculateAge(1956, 2015);
