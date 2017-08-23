function Movie(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.ticket = new window.Ticket(this);
}

Movie.prototype.getTicket = function() {
  return this.ticket;
};

window.Movie = Movie;
