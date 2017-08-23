//business logic

//** constructor for Movie objects
function Movie(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

//** ticket(); prototype for Movies loops through new Movie and returns the ticket type and price based on age and time
Movie.prototype.ticket = function() {
if (this.age ==='adult' && this.time ==='matinee') {
  $('#show-price').append('<p><span class="type">' + types[0].name + '</span></p>');
  $('#show-price').append('<p><span class="type">' + types[0].tickets[0].name + '</span></p>');
  $('#show-price').append('<p><span class="type">' + types[0].tickets[0].price + '</span></p>');
  } else if (this.age ==='senior' && this.time ==='matinee') {
    $('#show-price').append('<p><span class="type">' + types[0].name + '</span></p>');
    $('#show-price').append('<p><span class="type">' + types[0].tickets[1].name + '</span></p>');
    $('#show-price').append('<p><span class="type">' + types[0].tickets[1].price + '</span></p>');
    } else if (this.age ==='child' && this.time ==='matinee') {
      $('#show-price').append('<p><span class="type">' + types[0].name + '</span></p>');
      $('#show-price').append('<p><span class="type">' + types[0].tickets[2].name + '</span></p>');
      $('#show-price').append('<p><span class="type">' + types[0].tickets[2].price + '</span></p>');
      } else if (this.age ==='adult' && this.time ==='prime') {
        $('#show-price').append('<p><span class="type">' + types[1].name + '</span></p>');
        $('#show-price').append('<p><span class="type">' + types[1].tickets[0].name + '</span></p>');
        $('#show-price').append('<p><span class="type">' + types[1].tickets[0].price + '</span></p>');
        } else if (this.age ==='senior' && this.time ==='prime') {
          $('#show-price').append('<p><span class="type">' + types[1].name + '</span></p>');
          $('#show-price').append('<p><span class="type">' + types[1].tickets[1].name + '</span></p>');
          $('#show-price').append('<p><span class="type">' + types[1].tickets[1].price + '</span></p>');
        } else if (this.age ==='child' && this.time ==='prime') {
          $('#show-price').append('<p><span class="type">' + types[1].name + '</span></p>');
          $('#show-price').append('<p><span class="type">' + types[1].tickets[2].name + '</span></p>');
          $('#show-price').append('<p><span class="type">' + types[1].tickets[2].price + '</span></p>');
          }

};


//** nested objects for ticket types and prices
var adultMat = {
  name: "Adult Matinee",
  price: "$9.75"
};
var seniorMat = {
  name: "Senior Matinee",
  price: "$9.25"
};
var childMat = {
  name: "Child Matinee",
  price: "$8.75"
};

var matinee = {
  name: "Matinee Ticket Price:",
  tickets: [adultMat, seniorMat, childMat]
};

var adultPrime = {
  name: "Adult",
  price: "$11.75",
};
var seniorPrime = {
  name: "Senior",
  price: "$10.75",
};
var childPrime = {
  name: "Child",
  price: "$9.75",
};

var prime = {
  name: "Regular Ticket Price:",
  tickets: [adultPrime, seniorPrime, childPrime]
};

var types = [matinee, prime];

//user interface logic
$(document).ready(function() {

  $('form#checkMoviePrice').submit(function(event) {
    event.preventDefault();

    var selectedMovie = $('select#selectMovie').val();
    var selectedAge = $('select#selectAge').val();
    var selectedTime = $('select#selectTime').val();

    var newMovie = new Movie (selectedMovie, selectedAge, selectedTime);
    console.log(newMovie.ticket());

    $("#show-price").show();
    function addTextNode () {
      var newType = document.creatTextNode(text);
      showPrice = document.getElementById('#show-price');
      showPrice.appendChild(newText);
    }

  });


});
