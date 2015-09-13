/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
var not = sentence.indexOf("not");
var bad = sentence.indexOf("bad");

if (bad > not && bad != - 1 && not != - 1) {
  console.log("found them!");
  var reg_ex = new RegExp(sentence[0], "i");
  var rep = sentence.replace((sentence.substr(not, bad + 2)), ' good');
  return rep;
} else {
  return sentence;
}
}
console.log(notBad("This drink is not very bad"));
