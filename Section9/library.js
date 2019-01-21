///////////////////////////////////////////////////////////////
//Sectio 9 lecture 74

//first we should start by making it safe to use and we use a IIFE
//this way variables will not be overwritten and it can be safily used 
//with other code
(function(global, $) {

    //creates a 'new' object
    var Greetr = function(firstName, lastName, language) {
        //this function call greeter and returns another function which is the actual constructor
        //this way when using it we dont have to type new every time

        return new Greetr.init(firstName, lastName, language);
    }

    //list of the supported languages as abreviations
    var supportedLangs = ['en', 'es', 'jp'];
    //the languages variable will be hidden because it is inside the IIFE
    //but all the objects created with greetr will have access to them thanks to closures

    //list of casual greetings in supported languages
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        jp: 'こんにちは'
    };

    //list of formal greeting in supported languages
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        jp: 'ごきげんよう'
    };

    //log in message for supported languages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio Sesion',
        jp: 'サインイン'
        //just to know when the greeting has been logged
    }

    //all the methods for objects created with this library will be stored in this
    //object
    Greetr.prototype = {
        //get the full name of the person, first name and second name(in that order)
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        //checks that the selected language is supported
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw this.language + ' is not a supported language.';
            } 
        },

        //creates the casual greeting with the desired language and first name
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        //creates the formal greeting using desired language and full name(first and last)
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },


        greet: function(formal) {
            var msg;
        
            //if (formal) it will return a truthy value then the if will run
            //if undefined or null it will be coerced to false

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            return this;
            //this refers to the calling object at the execution time
            //it makes the method chainable
        },


        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },


        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },


        HTMLGreeting: function(selector, formal) {
            //this if statement checks if jQuerry was passed into the function
            //if it was not passed this method will not work
            if(!$) {
                throw 'jQuerry not loaded.';
            }
            //this if statement check that a selector was passed, as it wont work without one
            if(!selector) {
                throw 'Missing jQuerry selector.';
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else  {
                msg = this.greeting();
            }
            $(selector).html(msg);

            return this;
        }

    };
    //here will be all of the prototypes for greet


    Greetr.init = function(firstName, lastName, language) {
    //this function is the actual object constructor that is used on the Greetr fn
        var self = this;
        self.firstName = firstName || 'default';
        self.lastName = lastName || 'default';
        self.language = language || 'en';

        self.validate();

    }

    Greetr.init.prototype = Greetr.prototype;
    //here we set the Greetr.init prototype = to greetr.prototype in line 16
    //any object created with the Greetr function will point to line 16 for its prototype


    global.Greetr = global.G$ = Greetr;
    //here I am setting greetr to the global environment so it can be accesed out of 
    //this IIFE, and seting it equal to G$ so I can use that instead of typing Greetr
    //when doing this I cal get access to this function form everywhere
})(window, jQuery);