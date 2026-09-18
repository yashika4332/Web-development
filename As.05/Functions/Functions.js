function greet(){
    console.log("Welcome to Javascript");
}

function greetUser(name){
    console.log("Welcome "+name+" We are learning javascript");
}
function addNumbers(num1, num2){
    return num1 + num2;
}
let greets = greet();
let name = prompt("Enter your name");
let greeting = greetUser(name);
let a = Number(prompt("Enter  a"));
let b = Number(prompt("Enter b"));

let addition = addNumbers(a,b);
console.log(" The sum of "+a+" and "+b+" is "+addition);