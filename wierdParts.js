


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
//whitespace: is an invisible characters that creates literal 'space' in your written code

// var 
// //first name of the person
// firstName,
// //last name of the person
// lastName, 
// //languge of the person
// //can be 'en' or 'es'
// language;
// var person {
//   //the first name 
//   firstName: 'Edo',
//   //the last name
//   //(required!)
//   lastName: 'Serrano'
// };

// console.log(person);


////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 44
//immediately invoked function expressions (IIFE)

// //function statement
// function greet(nane) {
//   console.log('hello' + name);
// }

// //we nned to call a function to execute
// greet()


// //function expression
// var greetFunc = function(name) {
//   console.log('Hello ' + name);
// }

// greetFunc();



// //using an immediately invoked function expression (IIFE)
// var greeting = function(name) {
//   return 'Hello ' + name;
// }();






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 44
//IIFES and safe code

//IIFE
// (function(name) {

//   var greeting = 'hola';
//   console.log(greeting + ' ' + name);
// })('Edo');






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 45
//Closures part 1

//Big Word
//Closures: no big word  );

// //explanation of closures
// //when code starts we have a global execution context
// function greet(whattosay) {

//   return function(name) {
//     console.log(whattosay + ' ' + name);
//   }

// }


// greet('Hi')('Edo');

// var sayHi = greet('Hi');
// //with the previous line I invoke the function and create itsd own execution context, creating also the passed variable 'whattosay'
// //then returns a new function obj, it creates function and returns it. after which the execution context for the greet function 
// //gets out of the stack as it finished already
// sayHi('Edo');
// //with this line a new execution context is created  and when that code is invoked it will go up the scope chain
// // when line of the console log is run and js sees the whattosay variable, as it didn't find it within the function
// //it look up the scope chain.
// //the sayHi() still has a reference to what it was in its parents function memory space

// function sum(num1) {

//   return function(num2) {
    
//     return function (num3) {
      
//       return function (num4) {
//         console.log(this);
//         return num1 + num2 + num3 + num4;
//       }
//     }
//   }
// }









////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 47
//Closures part 2



// function buildFunctions() {

//   var arr = [];

//   for (var i = 0; i < 3; i++) {

//     arr.push(
//       function() {
//         console.log(i)
//       }
//     )
//   }
//   return arr;
// }



// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();













// function buildFunctions2() {

//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j)
//         }
//       })(i)
//     )
//   }
//   return arr;
// }



// var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();






////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 48
//Function Factories


// function makeGreeting(language) {



//   return function(firstName, language) {
//     if (language === 'en') {
//       console.log('Hello ' + firstName + ' ' + lastName);
//     }
//     if (language === 'es') {
//       console.log('Hola ' + firstName + ' ' + lastName);
//     }
//   }
// }


// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish('Edo', 'Serrano');










////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 lecture 49
//Closures and callbacks


// function sayHiLater() {
//   var greeting = 'Hi';
//   setTimeout(function() {
//     console.log('say ' + greeting + ' later.');

//   }, 3000);
// }


// sayHiLater();

// // //jquery uses function expressions and first class functions
// // $('button').click(function() {

// // });



// //Big Word///////////////
// //Callback Function: a function you give to another function, to be tun when the other function is finished
// //so the function you call (invoke) , 'calls back' calling the function you gave it when it finishes

// function tellMeWhenDone(callback) {
//   var a = 1000; //some work
//   var b = 2000; // some work
//   callback();

// }

// tellMeWhenDone(function() {
//   console.log('I am done');
// })

// tellMeWhenDone(function() {
//   alert('I am done');
// })







//////////////////////////////////////////////////////////////////////////////
//section 4 Lecture 50
//call(), apply(), bind()

//functions are special type of object that can have a name property and have a code property, all JS functions 
//have access to some methods that are call(), bind() and apply()



// var person = {
//   firstName: 'Edo',
//   lastName: 'Serrano',
//   getFullName: function() {


//     var fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
// }


// var logName = function(lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
//   console.log('arguments: ' + lang1 + ' ' + lang2);
//   console.log('----------------');
// }

// var logPersonName = logName.bind(person);
// //bind indicates to which object link to use the 'this'  variable

// logPersonName('English', 'Spanish');



// logName.call(person, 'english', 'spanish');
// //works the same as the parenthesis, but allows me to controll the this variable as well.


// logName.apply(person, ['en', 'es']);
// //the same as call but it accepts an array as argument




// (function(lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
//   console.log('arguments: ' + lang1 + ' ' + lang2);
//   console.log('----------------');
// }).apply(person, ['es', 'en']);



// //function borrowing
// var person2 = {
//   firstName: 'Sebastian',
//   lastName: 'Penafiel'
// }

// console.log(person.getFullName.apply(person2));



// //function currying
// function multiply(a, b) {
//   return a*b;
// }

// var multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(5));



// //Big Word
// //Function Currying: creating a copy of a function but with some preset parameters










/////////////////////////////////////////////////////////////
//section 4 lecture 51
//functional programming





// var arr1 = [1, 2, 3];
// console.log(arr1);

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
  
//   arr2.push(arr1[i] * 2);

// }

// console.log(arr2);


// function mapForEach(arr, fn) {
// //create a fn that accepts 2 parameters, an array and a function to modify and remap the array
//   var newArr = [];
//   //a new array to be mapped
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(
//       fn(arr[i])
//       //when the function is called an empty array is created, and a for loop to fill it is run
//       //for each itteraton of the for loop a ffunction passed as parameter is run taking the arr parameter as its parameter as well
//       )
//   }
//   return newArr;
// }
// arr2 = mapForEach(arr1, function(item) {
//   return item * 2;
// //the function is run taking a previously created array as a parameter and an anonymous function as the second parameter
// //the anonimous function replaces the fn on line 1390 and for each iteration of the for loop multiplies the array value on i location by 2
// //then it will retuirn the value in form of an array and set arr2 = to that new array
// });

// console.log(arr2);

// var arr3 = mapForEach(arr1, function(item) {
//   return item > 2;
//   //this can also work with boolean values, it repeats the function but this time it will compare values and return either true or false in arrays


// });
// console.log(arr3);

// var checkPasLimit = function(limiter, item) {
// //on the previous example, arr3, it is not the best practice because you are hard coding the comparison variable (2), so this function seeks 
// //to make it more modular by asking for both values the limiter (or comparison) and the item(which will be the arr passed to the mapForEach function) 
  
// return item > limiter;
// //it will return true or false depending on the comparison made in an array form
// };

// var arr4 = mapForEach(arr1, checkPasLimit.bind(this, 1));
// //as the fn parameter on the mapForEach function (line 1384) will only accept one parameter so checkPastLimit function will not work as it needs 2 parameters
// //to make it work we use the .bind prototype to preset values for the chechPastLimit.
// //in the checkPasLimit.bind parameters, there is no object we need to point to use the this variable so it can be set to null or this
// //the second parameter will be the limiter for the function, by doing so a copy of the function checkpaslimit holding the first parameter is saved
// //which needs only the item parameter to run, and passed to the mapforeach so when the line 1390 will turn to this when function runs=
// //line 1390 = checkPasLimit(1, arr[i]) being 1 the preset value.
// console.log(arr4);

// var limit = function(limiter) {
//   //with  this function expression I am creating a function that recieves only the limiter parameter 
//   //and returning a copy of the checkPasLimit that contains the this variable and the limiter value that I decide
  
//   return checkPasLimit.bind(this, limiter);
//   //so if limit(5) = checkPasLimit(this, 5)
// }

// var arr5 = mapForEach(arr1, limit(2));
// console.log(arr5);

//const _ = require('underscore');

/////////////////////////////////////////////////////////////
//section 4 lecture 52
//functional programming Part 2 

// //use of underscore
// var arr1 = [1, 2, 3];
// var arr6 = _.map(arr1, function(item) {
//   return item * 5
// })
// console.log(arr6);

// var arr7 =_.filter([2,3,4,5,6,7], function(item) {
//   return item %2 === 0;
// });

// console.log(arr7);








///////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 5 Lecture 53
//CLassical vs prototypical inheritance

//conceptual aside
//Big Word
//Inheritance: one object get access to another object's methods and properties.


//Classical inheritance:
//its a way to share methods and properties in objects, (the most popular way which was done for a long time)
//very verbose, becomes too large and hard to figure out how they affect other objects


//prototypal inheritance:
  //very flexible, extensible and easy to undertand







 ///////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 5 Lecture 54
//Understanding the prototype

//prototype: objects can have properties and methods which can be accessed using the . operator (esample object.property), JS add properties
//and methods to all abjects and all have a prototype properties


// var person = {
//   firstName: 'default',
//   lastName: 'default',
//   getFullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }



// var edo = {
//   firstName: 'Edo',
//   lastName: 'Serrano'
// }

// //what follows is an example, just to understand DONT YOU DARE USE IT

// edo.__proto__ = person;
// //now john inherits from person 
// console.log(edo.getFullName());


// var jane ={
//   firstName : 'Jane'
// }
// jane.__proto__ = person;
// console.log(jane.getFullName());










// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// //Section 5 Lecture 55
// //Evertything is an object (or a promitive)

// var a = {};
// var b = function () {};
// var c = [];
// //in the browser console we can access all of its prototypes






// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 5 Lecture 56
// Reflection and extend


//Big Word:
//Reflection: an object can look at itself listinf and changing its propertiers and methods


// var person = {
//   firstName: 'default',
//   lastName: 'default',
//   getFullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }



// var edo = {
//   firstName: 'Edo',
//   lastName: 'Serrano'
// }

// //what follows is an example, just to understand DONT YOU DARE USE IT

// edo.__proto__ = person;
// //now edo inherits from person 


// //example of reflection
// for (var prop in edo) {
//   //the 'for in ' statement is like the for each statement, 
//   //it will loop every member of the object, for every loop we will have a var called prop wich will hold the value of the current member
//   //in this case prop will only hold the key name (firstName and lastName)
//   if (edo.hasOwnProperty(prop)) {
//     //the hasOwnProperty looks if the property passed as a parameter exist within the object, if so it will be truthy, if it exist not in the object
//     //but in the proto it will be falsy
//   console.log(prop + ': ' + edo[prop]);
//   }
// }
// //when logged to the console, it loged not only the values of the 'edo; object but also of its prototype. Sometimes i need only to log the values 
// //for the oibject and not the prototype, to do so go to line # 1585






// //using undescore

// var jane = {
//   address: '111 main st.',
//   getFormalFullName: function() {
//     return this.lastName + ', ' + this.firstName;
//   }
// }

// var jim = {
//   getFirstName: function() {
//     return firstName;
//   }
// }


// _.extend(edo, jane, jim);
// //_.extend 
// //copies the properties and methods of other objects into one object, NOT INTO PROTO
// //the first parameter is the object to wich you will copy(the object you want to extend), and the others are the ones that will be copied
// //it combines all of those objects into one, but if there are nested objects those will not be phisically copied but only refference will be created
// console.log(edo);












// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 57
// Function constructors 'new', and history of javascript


// //Building Objects
// //first way of building objects 
// //functions constreuctors and the 'new'


// function Person() {
//   this.firstName = 'John',
//   this.lastName = 'Doe'
//   //if i return something from this function the constructor process would have been interrupted 
// }


// var john = new Person();
// //when 'new' is used an empty object is created and after wich the function is invoked, and as the function is being run 
// //within a new empty object, the this variable is pointing to this new empty object and sets the firstName and lastName


// console.log(john);


// function Dog(breed, name, owner) {
//   this.breed = breed;
//   this.name = name;
//   this.owner = owner;
// }

// var spunky = new Dog('husky', 'Spunky', 'Edo');
// console.log(spunky);

// var coco = new Dog('Shih Tzu', 'Coco', 'Edo');
// console.log(coco);


//Big Word
//Function constructor: a normal function used to construct objects, when the 'new' operator is placed before calling a function the 'this' variable
//taht is created during the creation phase of the execution context is set to the new object and that object is returned from the function
//when the function finishes executing









// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 58
// Function constreoctyors and .prototype



// function Dog(breed, name, owner) {    
//   this.breed = breed;
//   this.name = name;
//   this.owner = owner;
// }

// var spunky = new Dog('husky', 'Spunky', 'Edo');
// console.log(spunky);

// var coco = new Dog('Shih Tzu', 'Coco', 'Edo');
// console.log(coco);

// //when using a function constructor the prototype is already created
// //the protitype is used only when the function is used as an object constructor


// Dog.prototype.nextBathDay = function (daysSinceLastBath) {
//   //. prototype is a function property, by writting 'Dog.prototype' I am geting to the prototype obj this way what I create will be stored there
//   //and be accesible to all the instances of the constructor
  
//   var bathInterval = 15;
//   if (daysSinceLastBath > bathInterval) {
//     console.log('you should have bathed ' + this.name + ' ' +  (daysSinceLastBath - bathInterval) + ' days ago.');
//   }
//   if (daysSinceLastBath === bathInterval) {
//     console.log('you should have bathe ' + this.name + ' today.');
//   }
//   if (daysSinceLastBath < bathInterval) {
//     console.log('you should bathe ' + this.name + ' in ' +  (bathInterval - daysSinceLastBath) + ' days.');
//   }
// }

// spunky.nextBathDay(15);










// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 59
// Dangerous aside: 'new' and functions

//DO NOT FORGET TO USE 'NEW' BEFORE USEN A FUNCTION CONSTRUCTOR










// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 60
// Built in function constructors


// //there are some built in functions constructors in JS
// // example var a = new Number(3)
// var a = new String('Edo');

// console.log(a);
// console.log('edo'.length);
// console.log(new Date);

// //this object constructors look like you are creating a primitive but you are actually creating an object
// //when created like this those primitives gain properties


// //to add a feature to all string in js
// //as js will bow the string in an object to allow them to get properties

// String.prototype.isLengthGreaterThan = function(limit) {
//   return this.length > limit;
// }

// console.log('eduardo serrano'.isLengthGreaterThan(5));








// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 61
// Built in function constructors dangers

//you should use them only when necesary

// var a = 3;
// var b = new Number(3);
// console.log(a == b);
// //it is coherced thats why it gives true
// console.log( a === b );
// //a and b are not equal as a IS a primitive while b is actually an object

// //terrific library         momentjs.com
// //you should use this library when working with time








// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 62
// arrays and for in



// //arrays are objects 
// Array.prototype.myCustomFeature = 'cool';
// var arr = ['edo', 'sebas', 'aka'];

// for (var prop in arr) {
//   console.log(prop + ': ' + arr[prop]);
// }

// //for arrays DO NOT USE FOR IN, just use regular for loops









// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 63
// object.create and pure prototypal inheritance

//object.create is another way to create objects that do not mimic other languages 

// var person = {
//   firstName: 'default',
//   lastName: 'default',
//   greet: function() {
//     return 'Hi ' + this.firstName
//   }
// }



// //now I will use a new way to build objects

// var edo = Object.create(person);

// console.log(edo);

// console.log(edo.greet());
// //it creates a new empty array with the prototype for person but in order to fill the object is must be filled manually 

// edo.firstName = 'Edo';
// edo.lastName = 'Serrano';

// console.log(edo.greet());


//Big Word
//polyfill: code that adds a feature which the engine my lack


//if i am working in an older engine that does not support the Object.create 









// /////////////////////////////////////////////////////////////////////////////////////////////////////
// Section 6 Lecture 64
// ES6 and Classes


//JS does not have classes but will have them in the next version (ES6)

//what will a class look like
//a js class describes an object, you have a constructure and you can preset its values
//in other programing languages classes are not objects but tells how the class should look like
//class will look likew this

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     //the constructor takes the place instead of the function when cmaking a function constructor in previously made function constructors
//     //this is phisically copied within the new object.
//   }
//   //evrything outside the constructor will be in the prototype
//   greet() {
//     return 'Hi ' + this.firstName;
//   }
// }



// var john = new Person('John', 'Doe');


// class InformalPerson extends Person {
//   constructor (firstName, lastName, age) {
//     super(firstName, lastName);
//     this.age = age;
//   }


//   greet2() {
//     return 'Yo ' + this.firstName;
//   }
// }


// var edo = new InformalPerson('Edo', 'Serrano', 10);

// console.log(edo.greet());



//Big Word: 
//Syntactic Sugar: when you have a different way to type something in the code
//that does not change the weay they work under the hood











///////////////////////////////////////////////////////////////////////
//Section 7 Lecture 65 
//Odds and Ends



//initialization
//to set up objects arrays and functions 

// var people = [
//   {
//     firstName: '654654',
//     lastName: 'ihjbgiujhoj',
//     address:'ijhiuhiuh'
//   },
//   {
//     firstName: '654654',
//     lastName: 'ihjbgiujhoj',
//     address:'ijhiuhiuh'
//   },
//   {
//     firstName: '654654',
//     lastName: 'ihjbgiujhoj',
//     address:'ijhiuhiuh',
//     greet: function() {
//       return 'Hello!';
//     }
//   }
// ];










///////////////////////////////////////////////////////////////////////
//Section 7 Lecture 66 
//typeof, instanceof, and figuring out what something is



//if you have a variable and need to know what kind of variable is 



// var a = 3;
// console.log(typeof a);

// var b = 'Hi';
// console.log(typeof b);

// var c = {};
// console.log(typeof c);
// var d = [];
// console.log(typeof d);
// console.log(Object.prototype.toString.call(d));

// function Person(name) {
//   this.name = name;
// }

// var e = new Person('edo');
// console.log(typeof e);
// console.log(e instanceof Person);

// console.log(typeof undefined);
// console.log(typeof null);
// var z = function() {};
// console.log(z);












////////////////////////////////////////////////////////////////////////////
//Section 7 Lecture 67
//Strict Mode


// //
// var person;
// //lets suposed I missedtiped person into persom
// persom = {};

// console.log(persom);
// //even though I misedtyped the variable I can still log the 'persom'
// //if using strict mode it will not allow tos equal a variable to any value if it has not been previously declared
// //to use strict must be at the top of the file or a function in string for it to work

// function logNewPerson() {
//   'use strict';
//   var person2;
//   persom2 = {};
//   console.log(persom2);
//   console.log(person2);
// }

// logNewPerson();



////////////////////////////////////////////////////////////////////////////
//Section 8 Lecture 69
//learning from others good code





////////////////////////////////////////////////////////////////////////////
//Section 8 Lecture 72
//Deep Diving into source code

//Big Word:
//Method Chaining: calling one method after another and each method affect the parent object
//






////////////////////////////////////////////////////////////////////////////
//Section 10 Lecture 81
//Typescript, ES6, and transpiled languages

//big word
//Transpile: is to convert the sintax of one programming language, to another
//in this case languages that dont really ever run anywhere, but instead are
//processed by a 'transpiler' that generates javascript





