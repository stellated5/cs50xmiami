/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var calcCircumfrence = function(radius){
  var circumference = Math.PI * 2 * radius;
  console.log('The circumference is ' + circumference);
};

var calcArea = function(radius){
  var area = Math.PI * (radius * radius);
  console.log('The area is ' + area);
};

var radius = 10;
calcCircumfrence(radius);
calcArea(radius);
