
(() => {

  //sintax parse
  /**
   * a program that reads the code and detects what it does and if the sintax is correct
   * 
   * //lexical environment
   * where something physically sits in the written code
   * //execution context
   * a container for the code that is running, 
   */
})();


(() => {
//name/value pairs and objects
/**
 * Name value pair:
 * is a name that maps to a unique value
 * can only have ONE value per context
 * address = 'calle 4';
 * address is a name value pair
 * opbject 
 * a collection of name value pairs 
 * 
 */
})();

(() => {
  /**
   * global environment and object
   * code is always written within an execution context
   * the base execution context is the global execution context, global one is accesible everywhere
   * the js engine creates the 'this' variable withinthe global object
   * global reffers that is not inside a function
   * there is no outer environment when in global environment
   */

   //var a = 'hello world';
   function b(){

   }

})();


  //esta variable y funccion estan relacionadas al global object


  //**********************the execution context: creation & hoisting
b();
console.log(a); // da undefined ya que a aun no se la define</q>
//var a = 'hello world';


function b(){
  console.log('called b!');
}
b();
console.log(a);
//hoisting
/**
 * execution context is created in 2 phases
 * 1) Creation phase
 * *global object set up in the memory
 * *this variable set up in the memory
 * *there is an outer environment created
 * *2)execution phase
 * parser analyzes code and sets up a memory space for the memory and functions
 */


 //////*Javascrip and undefined
 /**
  * 
  */

  var a;
  console.log(a);

  if (a === undefined) {
    console.log('it is undefined.')
  } else {
    console.log('it is defined.')
  }

  //Section 2 lecture 12-----the execution context : code execution
  /**
   * in the execution phase we have all the thing the js engine creates and run the code
   */


   //*******Single threaded synchronous execution
   //single threaded:
   //one comand is executed at a time
   //programs are filled with many comands but only one is runing at a time
   //JS is not the only thing going on in the browser
   //synchronous====
   // one line of code is executed in order at a time
   //only one thing is happening at a time

   /**Function invocation and the execution stack
    * Invocation: to run or call a function, to call the function () are needed
    * example
    */
   function b() {

   };
   function a() {
     b();
   };
   a();
   /**The execution context is created in order
    * first the global execution context is created and all variables and function will be assigned a memory space
    * each function creates an execution context
    */

    /**Functions, context, and variable environments
     * variable environmnet: where the created variables live(where were they created), and how they interact with other variables
     */