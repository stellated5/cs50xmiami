/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
var regExInput = new RegExp(s[0], "g");
var sub = s.substr(1, s.length);
var rep = s[0] + sub.replace(regExInput, '*');

console.log(rep);
}
//fixStart("live love laugh");
fixStart("live love laugh");
