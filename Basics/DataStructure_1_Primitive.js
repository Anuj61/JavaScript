//JS has total 7 data structures out of which 6 are primitive and 1 is non primitive


//6 primitive structures includes Number(64bit), String, Boolean, Null, Undefined and Symbol
//Here, only primitive data structure is explained

//Number
var myNum = 5;    //Js is loosely coupled language so no need to define the type of variable.
console.log(typeof num); //returns a string having value "number"

//String

var myStr = "How was your day?";
console.log(typeof myStr); // output - "string"

//Boolean

var myBool = true;
console.log(typeof myBool); //output - "boolean"

//Undefined: the variable is declared without assigning any value

var myUndefinedVar;
console.log(typeof myUndefinedVar); //output- "undefined"

//Null: represents the intentional absence of any object value

var myNullVar = null;
console.log(typeof myNullVar); //output- "object"


//Typeof :
//typeof is an operator that reutrns a string, having one of the six values, that are object, boolean, function, number, string, and undefined. 

//Quick Question
console.log(typeof(typeof(5)));    //returns string


//Sources

//For more info on Null      : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
//Typeof Function or Operator: https://stackoverflow.com/questions/2797517/typeof-is-an-operator-and-a-function
//Typeof MDN docs            : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof 
