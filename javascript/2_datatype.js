//  it has tow type of datatype 
//  primitive datatype , objective datatype

//  primitive datatype
// string , number ,boolean, undefined, null, big int , symbol 

//  an object , an array, a date

// number example
var myAge=22;
console.log(myAge);

// string example
var myName="Harsh Thakur";
console.log(myName);

// boolean example 
var isRain="false";
console.log(isRain);

//undefined example
var myPhone;
console.log(myPhone);

//✅ Interview-Friendly One-Line Answer:

// undefined means a variable has been declared but not assigned a value.
// null is an assignment value that represents an intentional empty value.

// big int example
var myMoney=1234565785654322;
console.log(myMoney);

// string to number
var money="256"
console.log("this is a string ",money);
console.log(  typeof +myMoney); // use this + operator before the variable

// number to string
var age=56;
console.log("this is number ",age);
console.log(typeof String(age)); // method 1
console.log(typeof Date(age +"")); // method 2
// parseInt or pasreFloat also use for conversion string to num (both are function )
const myScore="23"
const mySc=parseInt(myScore);
console.log("new number "+mySc);

// operation
console.log(parseInt("123"));
console.log(parseInt("123",10));
console.log(parseInt("  123  "));
console.log(parseInt("077"));
console.log(parseInt(9.7));
// use isNaN() function to identify is it value or not


// important question
// why nan == nan ? it is false
if(NaN !=NaN){
  console.log(" now correct ");
}
// reason 