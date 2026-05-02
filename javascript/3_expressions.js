// type of operator
// 1. assignment operator
var myFev=5;
// assign the value 5 int myFav
// 2. arithmetic operator
let x=5;
let y=10;
var sum=x+y;
var mul=x*y;
var div=x/y;
console.log(sum);
console.log(mul);
console.log(div);
console.log("hello"/5);
console.log("5"/5);
var result =0.1+0.2;
console.log(result.toFixed(2));
console.log(0.7+0.1);
//3. comparison operator 
console.log(5==5);
console.log(5===5);
//4. logical operator
//5.string operator
//6.unary operator
//7.ternary (Conditional) operator
// Syntax    condition ? if true : if false;
var age=18;
var result= age>=18? "Yes is it ":"Not";
console.log(result);

//8. type operator
// if else 
  var age =18;
let isCitizen=false;
let isRegister=true;
if(age >= 18){
  if(isCitizen){
    if(isRegister){
      console.log("YES eligible");
    }
    else{
      console.log("not eligible dur to not register");
    }
  }
  else{
     console.log("not eligible dur to not citizen");

  }

}
else{
  console.log("not eligible (younger)");
}
