/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
var tellFortune = function(fortune) {
  console.log('You will be a ' + fortune[0] + ' in ' + fortune[1] + ', and married to ' + fortune[2] + ' with ' + fortune[3] + ' kids.');
}
var fortune1 = ["entrepreneur", "Seattle", "Javier", 2];
tellFortune(fortune1);
var fortune2 = ["artist", "Miami", "James Dean", 0];
tellFortune(fortune2);
var fortune3 = ["cafe owner", "Portland", "Joe", 5];
tellFortune(fortune3);
