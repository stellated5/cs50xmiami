/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
var swap;

function mixUp(a, b) {
  // write your solution here...
swapA = a.replace(a.substr(0, 2), b.substr(0, 2));
swapB = b.replace(b.substr(0, 2), a.substr(0, 2));
return swapA, swapB;
}
mixUp("cat", "dog");
console.log(swapA + " " + swapB);
