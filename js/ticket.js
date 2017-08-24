function Ticket(movie) {
  return {
    title: types[movie.time].title,
    name: types[movie.time][movie.age].name,
    price: types[movie.time][movie.age].price,
  };
}

var types = {
  matinee: {
    title: 'Matinee Ticket Price:',
    adult: {
      name: 'Adult Matinee',
      price: '$9.75'
    },
    senior: {
      name: 'Senior Matinee',
      price: '$9.25'
    },
    child: {
      name: 'Child Matinee',
      price: '$8.75'
    }
  },
  prime: {
    title: 'Regular Ticket Price:',
    adult: {
      name: 'Adult',
      price: '$11.75',
    },
    senior: {
      name: 'Senior',
      price: '$10.75',
    },
    child: {
      name: 'Child',
      price: '$9.75',
    }
  }
};

window.Ticket = Ticket;
