


/*
 ***Sintax Parse
 a program that reads the code and detects what it does and if the sintax is correct
 * //lexical environment
 * where something physically sits in the written code
 * //execution context
 * a container for the code that is running, 
*/


/*
name/value pairs and objects

* Name value pair:
* is a name that maps to a unique value
* can only have ONE value per context
* address = 'calle 4';
* address is a name value pair
* opbject 
* a collection of name value pairs 

*/
 

/**
* global environment and object
* code is always written within an execution context
* the base execution context is the global execution context, global one is accesible everywhere
* the js engine creates the 'this' variable withinthe global object
* global reffers that is not inside a function
* there is no outer environment when in global environment
   

var a = 'hello world';
function b(){
}
*esta variable y funccion estan relacionadas al global object
*/






/*
//   //**********************the execution context: creation & hoisting
// b();
// console.log(a); // da undefined ya que a aun no se la define</q>
// //var a = 'hello world';


// function b(){
//   console.log('called b!');
// }
// b();
// console.log(a);
// //hoisting

* execution context is created in 2 phases
* 1) Creation phase
* global object set up in the memory
* this variable set up in the memory
* there is an outer environment created
* 2)execution phase
* parser analyzes code and sets up a memory space for the memory and functions
*/ 


//  //////*Javascrip and undefined
//  /**
//   * 
//   */

//   var a;
//   console.log(a);

//   if (a === undefined) {
//     console.log('it is undefined.')
//   } else {
//     console.log('it is defined.')
//   }

//   //Section 2 lecture 12-----the execution context : code execution
// /**
//  * 
// */

//    //*******Single threaded synchronous execution
//    //single threaded:
//    //one comand is executed at a time
//    //programs are filled with many comands but only one is runing at a time
//    //JS is not the only thing going on in the browser
//    //synchronous====
//    // one line of code is executed in order at a time
//    //only one thing is happening at a time

//    /**Function invocation and the execution stack
//     * Invocation: to run or call a function, to call the function () are needed
//     * example
//     */
//    function b() {

//    };
//    function a() {
//      b();
//    };
//    a();
//    /**The execution context is created in order
//     * first the global execution context is created and all variables and function will be assigned a memory space
//     * each function creates an execution context
//     */

//     /**Functions, context, and variable environments
//      * variable environmnet: where the created variables live(where were they created), and how they interact with other variables
//      */






/*
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //secton 2  lecture 16
  //The Scope Chain
  //where i can access the variables, linking an execution context to its outer environments

  function b() {
    console.log(myVar);
  }
  function a() {
    var myVar = 2;
    b();
  }

  var myVar = 1;
  a();

  //JS does more than just look into the context of the declared variable or function, 
  //console.log in Fuinction b() as myVar was not set it takes the variable declared in the global object.
  //because the function b sits lexically in the global environment


  //I will change the lexical environment of the fubcton b()

  function d() {
    var myVar = 2;
    function c() {
      console.log(myVar);
    }
    c();
  }

  d();
*/






/*
  //////////////////////////////////////////////////////////////////////
  //section 2 lecture 17
  //Scope, ES6, and let


  //BIG Word

  //Scope: Where a variable is available in your code
  //       and if it's truly the same variable, or a new copy.

  //in ES6 let can be used to declare variable instead of var (NOT replacing var), 
  //let allows the JS engine to use BLOCK SCOPING. 
*/



//////////////////////////////////////////////////////////////////////////
//section 2 lecture 18
//Asynchronous Callbacks


//BIG Word
//Asyncronous: means more than one at a time


//////////////////////////////////////////////////////////////////////////////
//Section 3 Lecture 19
//Types and Javascript
//BIG Word
//dynamic typic
//you dont tell the JS engine what tupe of data a variable hods, it figures it out while the code is runing.
//variables can hold different types of values




//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 20
// Primitive Types


//BIG Word
//Primitive tyoe: a type of data that represents a single values, it is NOT an object
//6 primitive types:
//1)Undefined: a lack of existence, SHOULD NEVER BE ASIGNED TO A VARIABLE
//2) Null: also represents lack of existence, could be asigned to a variable, and returns false.
//3) Boolean: is true or false
//4) number: there is one numeric type in JS, floating point number(always some decimals). Other programming languages there are more than one number type
//5) string: a sequence of charactes that need '' or ""
//6) symbol: used in ES6


//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 21
// Operators

//BIG Word
//Operator: a special function that is syntactically (written) differently, generally, operators take 2 parameters and return 1 result

// var a = 3 + 4;
// console.log(a);
//infix notation


//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 22
// Operators precedende and associativity 

//BIG Word
//Operator Precedence: which operator function gets called first in the firs line of code, the higher precedence wins and will be caled first 
//Associativity: what order operator function get called in: left to right or right to left.      When functions have the same precedence

// var a = 3 + 4 * 5;
// console.log(a);


//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 24
// Coercion

// //BIG Word
// //Coercion: is to convert a value from one type to another, like convert a string to a number
// //example
// var a = 1 + 2;
// console.log(a);
// //the + operator used to sum 2 strings we gen an adition but if I use a '"string" + 2' the number will be converted into an string.
// var b = 'string' + 2;
// console.log(b);

// var c = 1 + '2';
// console.log(c);
// //this last one is a string and the number is coerced into an string

// //because JS is dinamically tiped it is constantly changing things to the value I want



//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 25
// Comparison Operators

// console.log(1 < 2 < 3);
// console.log(3 < 2 < 1);
// //all operators here have the same precedence so asociativity for it is left to right (the one furthest to the left goes first) 3<2 runs first so we have this (false < 1)
// //and false is equal to 0 so (0 < 1) = true
// //the same hapens in the line --267--
// var q = Number('Eduardo');
// console.log(q)
// console.log(Number(undefined));
// console.log(Number(null));

// //comparison operators like '==' which means "are this two things equal" it performs type coersion
// console.log(3 == 3);
// console.log ('3' == 3);
// console.log(false == 0);
// var a = false;
// console.log(a == 0);
// console.log(null == 0); 
// console.log(null < 1);
// console.log('' == 0);
// console.log('' == false);
// //using the double equal uses type coersion so it create unexpected bugs, to prevent that we use === (strict equality), it does not perform type coersion

// console.log(3 === 3);
// console.log('3' === '3');
// console.log('3' === 3);

// var b = 0;
// var c = false;
// if (b === c) {
//   console.log('They are equal.');
// } else {
//   console.log('They are not equal.');
// }










//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 27
// Existence and Booleans

// //this function is used to convert to boolean, USE ONLY FOR DEMONSTRATION
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(''));
// //all that imply lack of existance convert to false
// var a;
// //lets imagine that I have a some code that goes to the internet and looks for a value and then it sets a = to that value

// if (a) {
//   console.log('something');
// } else {
//   console.log('nothing here');
// }
// //iff statements, what is inside a parenthesis will try to convert or coerce into a boolean
// //as variable a right now is equal to nothing (in this case undefined) we get a falsy value
// a = '';
// if (a) {
//   console.log('something');
// } else {
//   console.log('nothing here');
// }
// a = null;
// if (a) {
//   console.log('something');
// } else {
//   console.log('nothing here');
// }

// //as false = 0, if the variable a = 0 I will also get a falsy result for the if statement even though 0 does not represent lack of existance.
// a = 0;
// if (a) {
//   console.log('something');
// } else {
//   console.log('nothing here');
// } 
// //a solution for this is as follows

// if (a || a === 0) {
//   console.log('something');
// } else {
//   console.log('nothing here');
// } 











//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 28
// Default Values

// function greet(name) {
//   return console.log('Hello ' + name + '.')

// }
// greet('Eduardo');
// greet()
// //when calling the function without passing a parameter, the variable name within the function's execution context will not be asigned any value and it will be undefined
// //due to type coersion undefined is converted into a string

// //the || operator not only returns true or false but returns the value that can be coerced to true

// var name;
// name = name || "Eduardo";
// console.log(name);

// name = 'Edo' || 'Eduardo';
// console.log(name);
// //because the asociativity for the || is left-right and the first value is a 'truthy' value it will pick that result
// console.log(undefined || 'Edo');
// console.log(null || 'Edo');
// console.log('' || 'Edo');










//////////////////////////////////////////////////////////////////////////////////
//section 3 Lecture 29
// Framework Aside: Default Values


//framework & library: a grouping of JS code that performs a task and is intended to be reusable
//the different libraries are stacked and run as if it were one file, on the lib3 fine the consolelog(libraryName) logs 'Library 2' becase the variable was created on the lib1.js file
// and modified on the lib2.js file when the var was declared. it works like this depending on the order the scripts are leaded
//to prevent this from happenig we should do as follow
//window.libraryName = window.libraryName || 'lib 2'










//////////////////////////////////////////////////////////////////////////////////
//section 4 Lecture 30
// Objects and functions


// //objects and functions are very much related in JS

// //*Objects and the DOT
// //objects are collections af name/value pair, and this name/value pairs can at the same time
// //be another name/value pair collection
// ///looking at object from another perspective, about how the object resides in the computer memory
// //as we said objects are a collection of values, but what kind of values?
// //objects values can be properties and methods
// /////Properties are primitive values, another object, an array
// /////Methods are functions, when 
// //objects sit in memory and have reference to other things siting in memory conected to it as well (properties and methods)

// var person = new Object();
// //there are better ways to create an object, this is only as demonstration
// //to add properties and methods
// //computed number access operator
// person['firstName'] = 'Edo';
// person['lastName'] = 'Serrano';

// var firstNameProperty = 'firstName';

// console.log(person);
// //we can use an string to access the desired value

// console.log(person[firstNameProperty]);
// //we can also use a variable containing an string to get the value


// //now I am going to use the  dot operator
// //this is the member access operator
// console.log(person.lastName);

// person.address = new Object();

// person.address.street = 'Via Samborondon';
// person.address.city =  'city name';
// person.address.state = 'somewhere else';

// console.log(person.address.street);
// console.log(person['address']['city'])




//////////////////////////////////////////////////////////////////////////////
//section 4 Lecture 31
// Objects and Object literals

// //another way to create an object is as follows

// var person = {};
// //the js engine when parsong the sintax and finds {} that are not atached to 
// //an if statement, for loop, or a function it will asume it is an object
// console.log(person);

// //we can also initialize the object and set properties and methods
// //inside the {}

// var eduardo = {
//   name: 'Edo',
//   lastName: 'Serrano',
//   address: {
//     street: 'street name',
//     city: 'city name',
//     state: 'state name'
//   }
// };

// function greet(person) {
//   return console.log('Hi ' + person.name + '.')
// }

// greet(eduardo);

// greet({
//   name: 'Edu',
//   lastName: 'Serrano'
// });








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 32
//Framewwork Aside: Faking Namespaces

//Big word
//Namespace: a container for variables and functions, used to keep variables and functions with the same name separate.

// var greet = 'Hello';
// var greet = 'Hola!';

// console.log(greet);

// var english = {};
// var spanish = {};

// english.greet = 'Helo!';
// spanish.greet = 'Hola!';

// console.log(english);







////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 33
//JSON and object literals


//JSON: Javascript Object Notation, it is inspired in js object literal 

// var objectLiteral = {
//   firstName: 'Mary',
//   isAProgrammer : true
// };

// //console.log(objectLiteral);

// //console.log(JSON.stringify(objectLiteral));

// var string = JSON.stringify(objectLiteral);
// console.log(string);
// //how should string look
// var asExample = '{"firstName":"Mary","isAProgrammer":true}';
// //how it should look as a string
// var backToObject = JSON.parse(string);
// console.log(backToObject);









////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 34
//Functions are objects

// //big word
// //First class functions: everything you can do with other types (objects, strings, numbers, booleans) you can do with functions.
// //and assign them to variables, pass them around, create them on the fly

// function greet() {
//   console.log('hi');

// }
// greet.language = 'english';

// console.log(greet);
// console.log(greet.language);






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 35
//Function statement and function expressions 

//Big Word
//Expression: a unit of code that results ina avalue, it doesn't have to be saved in a variable
//example
// var a; 
// if (a === 3) {

// }
// //if is an statement and it just does work but does not return a value


// //This is a function statement
// function greet() {
//   console.log('hi');
// }
// //the function does not result in a value, it is placed into memory but will not return a value until it is ecxecuted, and will not result in a value.


// //function expression

// var anonymousGreet = function() {
//   console.log('hi');
// } 
// //to call function expressions we do as follows
// anonymousGreet();

// function log(a) {
//   console.log(a);
// }

// log(3);
// log('hello');
// log({
//   hi: 'Hi',
//   hello: 'Hello'
// });
// log([0,1,2,3,4,5,6,7,8,9]);

// log(function() {
//   console.log('hi')
// });








////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 36
//by value vs by reference


//if i have an object in js (or functions), when I set a variable = an object (a=object) I get an address in memory to reference the object,
//if i sett a variable = to another variable which contains an object ((a=object) = b) it copies the same direction for the object in memory to reference the object but it does
// make a copy of the object for the new variable, or creates a new object in memory

//if a variable is = to a primitive (a=number/string/bloolean) it creates a copy especifically for the variable and an address in memory, if thast variable
// is set = to another variable (b=a) the new variable will have a new copy of the primitive, this is knows as by value


//examples
// //by value
// var a = 3;
// var b;

// b=a;

// a = 5;
// console.log(a);
// console.log(b);

// //as each hold a separate copy in memory for ther value after modifying a b continues to have the same value


// //by reference (objects and functions)
// var c = {
//   greeting: 'hi'
// };
// var d;

// d = c;
// c.greeting = 'hello'; //object mutation



// // js knows that c points to an object, so instead of setting d to a new memory space it just points to the space in memory where the object is stored

// //Big Word

// //mutate: to change something, 'immutable' means that it canot be changed.// to mutate an object is to change something in it.

// console.log(c);
// console.log(d);

// //primitives are passed by value and objects by reference

// function changeGreeting(obj) {
//   obj.greeting = 'hola';
// }
// //obj point to the same memory space as d, so the object that is referenced to d and c is mutated

// changeGreeting(d);

// console.log(c);
// console.log(d);

// c = {
//   greeting: 'howdy'
// };

// console.log(c);
// console.log(d);
// //now even though i am setting C = to another object that has the same name, because I am using the '=' operator to set it, it is allocated a new space in memory
// //to mutate the same object dot notation should be used













////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 37
//Objects, functions, and 'this'

// //reminder

// //when fuinction is called a new execution context is created and put in the execution stack, that determines how the code is run.

// //the execution context  of a function focuses on the code portion of the function object

// //every time an execution context is created (every time a function un called) it creates the 'this' variable, it will be pointing at a different object depending on

// //how the function is invoked

// //end of the reminder

// console.log(this);
// //this fot the global execution context is the window object

// function a() {
//   console.log(this);
// }

// a();
// //for the function, 'this' is also pointing at the window object

// var b = function() {
//   console.log(this);
//   this.newVariable = 'hello';
// }
// b();
// //the 'this' variable in this case is also pointing at the window object
// //as the 'this' variable points to the global object, I can create a variable on the global object(or the closest parent node) from the b function

// console.log(newVariable);


// var c = {
//   name: 'The c object',
//   log: function() {
//     this.name = 'updated c object',
//     console.log(this);
//     var setName = function(newName) {
//       this.name = newName
//     }
//     setName('Updated again! the c object')
//     console.log(this);
//     //this console log does not show the updated name as was expected, but instead added the name variable to the window object.
//     //when the setName function ran the 'this' pointed to the window object. 
//     //to prevent this issue from happening look at the floowing functions for variable d.
//   }
// };

// c.log();


// var d = {
//   name: 'The c object',
//   log: function() {
//     var self = this;
//     //self will be set to reference(because we are in an abject) to what the 'this' keyword points in memory


//     self.name = 'updated c object',
//     console.log(self);
    
//     var setName = function(newName) {
//       self.name = newName
//       //self is not declared within this function, so js will look down the scope chain until it finds the variable, where it lays self still points to the d object reference in memory

//     }
//     setName('Updated again! the c object')
//     console.log(self);
//   }
// };
// d.log();









////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 38
//Arrays, collections of anything

//an array is a collectiopn and hold many things inside of it
//arrays can hold any kind of data, primitives and objects
// var arr = [
//   1,
//   false,
//    {
//      name: 'edo',
//      address: 'somewhere'
//    }, 
//    function(name) {
//      var greeting = 'hello ';
//      console.log(greeting + name)
//    }];

//    console.log(arr);
//    arr[3](arr[2].name);






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 39
//Arguments and spread


//Big Word
//arguments: the parameters you pass to a function
//  JS gives a keyoword of the same name which contains them all


// function greet(firstName, lastName, language) {

//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log('------------');
// }

// greet();
// //i can call greet without passing any parameter and i will not get an error, in other languages it would happen
// //hoisting sets up the the parameters and assigned them memory space and set them to undefined

// greet('edo');
// //functions read the parameters from the left to the right 
// greet('edo', 'serrano');

// greet('edo', 'serrano', 'es');


// function greet2(firstName, lastName, language) {
  
//   language = language || 'en';
//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log(arguments);
//   //arguments contain a list of all the values that were passed to the function
//   console.log('------------');
// }  

// greet2('edo');

// function argument(firstName, lastName, language) {

//   language = language || 'en';
  
//   if(arguments.length ===0) {
//     console.log('No parameters.');
//     console.log('---------');
//     return; //use return to end the function, if not the function will continue running 
//   }
  
//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log(arguments);
//   console.log('arg 0 :' + arguments[0]); //arguments, is like an array but its not an array, it does not have all the functions as an array
//   //arguments contain a list of all the values that were passed to the function
  
// }

// argument('edo');

// //new thigs used istead of the argument is the spread
// function spreads(firstName, lastName, language, ...others) {

//   // language = language || 'en';
  
//   // if(arguments.length ===0) {
//   //   console.log('No parameters.');
//   //   console.log('---------');
//   //   return; //use return to end the function, if not the function will continue running 
//   // }
  
//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log(...others);
  
// }
// const arr = ['sebastian', 'penafiel', 'nihongo', 'hola', 'etc', 'senpai'];

// spreads(...arr);









////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 40
//Function overloading

//Js does not have function overloading while other languages do have

//function overloading is having functions with the same name but with different amount of arguments, in JS you can pass as many arguments to a function
//as you like even if they are not defined.

// function greet(firstName, lastName, language) {
//   language = language || 'en';

//   if (language === 'en') {
//     console.log('Hello ' + firstName + ' ' + lastName);

//   }

//   if (language === 'es') {
//     console.log('Hola ' + firstName + ' ' + lastName);

//   }

// }

// function greetEnglish(firstName, lastName) {
//   greet(firstName, lastName, 'en');
// }

// function greetSpanish(firstName, lastName) {
//   greet(firstName, lastName, 'es');
// }

// greet('edo', 'serrano', 'en');
// greet('edo', 'serrano', 'es');


// greetEnglish('edo', 'serrano');
// greetSpanish('edo', 'serrano');








////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 41
//Syntax Parsers






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 42
//Automatic semicolon insertion

//sintax parser in JS tries to be helpful. by placing a semicolon wherever it thinks one semicolon should be.
//ALLWAYS PLACE THE SEMICOLONS ESPECIALY ON RETURNS


// function getPerson() {

//   return
//   //I get undefined because I placed enter and placed the object in a new line, the object should have started on the same line as the return, that way the parser will see
//   //curly braces and will know that it is not finishing the function but returning an array.
//   {
//     firstName: 'Edo';
//   }
// }


////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 43
//AWhitespace
