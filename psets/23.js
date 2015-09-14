/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var movie = {
  title: "The Godfather",
  duration: 3,
  stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
};

var movieInfo = function(myObj) {
  console.log(movie.title + " lasts for " + movie.duration + " hours. Stars: " + movie.stars + ".");
};

movieInfo(movie);
