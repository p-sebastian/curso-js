function greeting(lastName, firstName) {
  return firstName + ' ' + lastName;
}

console.log(greeting('p', 'sebastian'));

var greetPenafiels = greeting.bind(null, 'penafiel');

console.log(greetPenafiels('marcela'))