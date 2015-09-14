/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...

var pluralize = function(word, num) {
if (num === 1) {
return num + " " + word;
} else if (num > 1) {
  return num + " " + word.concat("s");
}
};

console.log(pluralize("chicken", 3));
console.log(pluralize("notebook", 1));
console.log(pluralize("drink", 10));
console.log(pluralize("rabbit", 1));
