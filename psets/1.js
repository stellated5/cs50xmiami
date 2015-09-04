/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var cur_yr = 2015;
var birth_yr = 1982;

var age1 = cur_yr - birth_yr;
var age2 = cur_yr - (birth_yr - 1);

console.log('They are either ' + age1 + ' or ' + age2);
