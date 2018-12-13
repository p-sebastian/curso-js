(() => {
  var firstName = 'Edoooo';
  
  console.log(firstName);
  var lastName = 'Serrano';
  var age = 27;
  var fullAge = true;
  console.log(fullAge);
  
  var job;
  console.log(job); 
  
  job = 'Otaku'
  console.log(job); 
  
  
  // DO NOT USE
  var _ = 'underscore';
  var _job = 'private';
  // NOOOOOOOO
})();

(() => {
  /*
   * Variabnle mutation & type coercion  
   */
  
  
  
  var firstName = 'Edo';
  var age = 27;
  console.log(firstName + ' ' + age);
  
  var job = 'otaku';
  var isMarried = false;
  console.log(firstName + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);
  
  age = 'twenty eight';
  job = 'himajin';
  //alert(firstName + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);
  //var who = prompt('who are you??');
})();

(() => {
  /**
   * Basic operators
   */
  var currentYear = 2018;
  var yearEdo = currentYear - 27;
  var yearSebas = currentYear - 25;
  console.log(yearEdo);

  /**
   * NOOOOOOOOOOOOO
   * MALLLLLLLLLLLLLLLL
   * NEVERRRRR
   * RE MAL
   * jamas se deben crear variables sin la declaracion de var o let o const
   * ya que se agregan al scope global, y nooooo se quiere eso jamas, por que interfiere
   * con TOOOODO
   */
  // now = 1;
  // Logical operators
  var edoOlder = yearEdo < yearSebas;
  console.log(edoOlder); 

  // typeof operator
  console.log(typeof edoOlder);
  console.log(typeof yearEdo);
  var x;
  console.log(typeof x);

})();




(() => {

  var sebas = {
    mass: 86,
    height: 1.77
  };
  var edo = {
    mass: 80,
    height: 1.80
  };

  var bmiSebas = sebas.mass / (sebas.height^2);
  var bmiEdo = edo.mass / (edo.height^2);
  var sebasFatterThanEdo = bmiSebas > bmiEdo;
  console.log("Is Sebas BMI greater than Edo's? " + sebasFatterThanEdo);









})();