/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
var newWord = "";
var end = "";
  if (word.length >= 3) {
    end = word.substring((word.length - 3), (word.length));
    if(end == 'ing'){
      newWord = word.concat('ly');
    } else {
      newWord = word.concat('ing');
  }
console.log(newWord);
}
}
verbing('swimming');
