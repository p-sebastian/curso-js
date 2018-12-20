

// var name = 'Edo';

// function first() {
//     var a = 'Hello!';
//     second();
//     var x = a + name;
//     console.log(x);
// }

// function second() {
//     var b = 'Hi!';
//     third();
//     var z = b + name; 
// }

// function third() {
//     var c = 'Hey';
//     var z = c + name;
// }

// first();


(() => {
//hoisting
calculateAge(1980)

//hoisting functions
function calculateAge(year) {
    console.log(2018-year);
} 
calculateAge(1991);


var retirement = function(year) {
    console.log(65 - (2018 - year));
}
retirement(1990);

//hoistins withvariables
console.log(age);
var age = 23;
console.log(age);


function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

})();



(() => {
console.log(this)
})();