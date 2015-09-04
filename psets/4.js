/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var celsius1 = 50;
var fahrenheit1 = ((celsius1 * 9) / 5) + 32;

console.log(celsius1 + '°C' + ' is ' + fahrenheit1 + '°F');

var fahrenheit2 = 97;
var celsius2 = ((fahrenheit2 - 32) * 5) / 9;

console.log(fahrenheit2 + '°F' + ' is ' + celsius2 + '°C');
