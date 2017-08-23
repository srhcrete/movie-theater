function updatePriceElement(ticket) {
  window.utils.updateElementContents(window.$('#show-price'), [ticket.title, ticket.name, ticket.price]);
}

function handleFormSubmit(event) {
  var $ = window.$;

  event.preventDefault();

  var formData = $(this).serializeArray().reduce(function(memo, item) {
    memo[item.name] = item.value;
    return memo;
  }, {});

  var newMovie = new window.Movie(formData.movieName, formData.age, formData.time);

  updatePriceElement(newMovie.getTicket());
}

function prepareMovieForm() {
  window.$('#checkMoviePrice').submit(handleFormSubmit);
}

function handleDocumentReady() {
  prepareMovieForm();
}

handleDocumentReady();
