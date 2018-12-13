
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





(() => {

  var firstName = 'Edo';
  var civilStatus = 'single';
  
  if (civilStatus === 'married') {
    console.log(firstName + ' is married');
  } else {
    console.log(firstName + ' is not Married'); 
  }

  var isMarried = true;

  if (isMarried) {
    console.log(firstName + ' is married');
  } else {
    console.log(firstName + ' is not Married'); 
  }
  
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
  /**
   * var sebasFatterThanEdo = bmiSebas > bmiEdo;
  console.log("Is Sebas BMI greater than Edo's? " + sebasFatterThanEdo);

   */
  if(bmiSebas > bmiEdo) {
    console.log('Is Sebas BMI greater than Edo\'s');
  }else {
    console.log('Edo\' BMI is higher than Sebas\'s');
  }

})();

//boolean logic

(() => {

var firstName = 'Edo';
var age = 12;

if (age < 13) {
  console.log(firstName + ' is a ' + age + ' years old boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a ' + age + ' years old teenager.');
} else if(age >=20 && age > 30) {
  console.log(firstName + ' is a young adult.')
} else {//operators && = and----- || = or ---- (!) = not
  console.log(firstName + ' is an old guy );');
}
  



})();



(() => {
  //The ternary operator and switch statements
  //////////////////////////pilas con esto, mas corto que if else staterments
  var firstName = 'Edo';

  var age = 27;
  //ternary operator
  age >= 18? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
  var drink = age >= 18 ? 'beer' : 'juice';

  console.log(drink);

  //switch statement:

  var job = 'teacher';

  switch (job) {
    case 'teacher':
      console.log(firstName + ' teaches kids.');
      break;
    case 'driver':
      console.log(firstName + ' drives a car.');
      break;
    case 'designer':
      console.log(firstName + ' designs nice webpages.');
      break;
    default:
      console.log(firstName + ' does nothing for his life.')
  }
  
  var age = 27;

  switch (true) {
    case age < 13:
      console.log(firstName + ' is a ' + age + ' years old boy.');
      break;
    case age >= 13 && age < 20 :
      console.log(firstName + ' is a ' + age + ' years old teenager.');
      break;
    case age >=20 && age < 30 :
      console.log(firstName + ' is a young adult.');
      break;
    default:
    console.log(firstName + ' is an old guy.');
  }

})();






(() => {
/***************
 * Truthy and falsy values and equality operators
 * 
 * falsy values: undefined, null, 0 '', NaN
 * truthy values: NOT falsy values
 */

 var height = 23;
 if (height || height === 0) {
   console.log('variable is defined');  
 } else {
   console.log('variable has NOT been defined');
 }

 // equality operators
 if (height === '23') {
   console.log('the == does type coercion.');
 } else {
   console.log('the === does not do type coercion.');
 }
})();

(() => {//coding challenge 2
  
/*John and mike both play basketball in diferent teams. in the latest 3 games, john's team
scored 89, 120, 130 points, while mike;s team cored 116, 94, and 123 points.

1.- calculare the average score for each team
2.- decide which team wins in average, and print the winner to the console. 
(include average score in the output)
3.-change the scores to show different winners.
4.- EXTRA mary also plays basketball, and her team scored 97,134,106 points, 
log the average winner to the console
*/
var avrgJohn = (89 + 120 + 103) / 3;
var avrgMike = (116 + 94 + 123) / 3;
var avrgMary = (97 + 134 + 106) / 3;
console.log(avrgJohn, avrgMary, avrgMike);

if (avrgJohn > avrgMike && avrgJohn > avrgMary) {
    console.log('John\'s teams win with an average score of ' + avrgJohn + ' poins.');
} else if (avrgMary > avrgMike && avrgMary > avrgJohn) {
    console.log('Mary\'s teams win with an average score of ' + avrgMary + ' poins.');
} else if (avrgMike > avrgMary && avrgMike > avrgJohn) {
    console.log('Mike\'s teams win with an average score of ' + avrgMike + ' poins.');
} else if (avrgJohn === avrgMike && avrgJohn > avrgMary) {
    console.log('John and Mike win with a draw of ' + avrgJohn + ' points.');
} else if (avrgJohn === avrgMary && avrgJohn > avrgMike) {
    console.log('John and Mary win with a draw of ' + avrgJohn + ' points.');
} else if (avrgMary === avrgMike && avrgMary > avrgJohn) {
    console.log('Mike and Mary win with a draw of ' + avrgMike + ' points.');
} else {
    console.log('its a draw!')
}



})();