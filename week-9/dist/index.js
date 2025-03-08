"use strict";
// write a function that greets a user given their firstname
function greet(firstname, lastName) {
    console.log(`Hello ${firstname}, How's it going`);
}
greet("Vikas", "Singh");
//type infrence : ts automatically infers what the function will return based on input types
//good to still mention the required return type 
function sum(a, b) {
    return a + b;
}
console.log(sum(100, 200));
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(isLegal(19));
//create a function that takes anoter function as input and runs it after 1 second
function delay(fn) {
    setTimeout(fn, 2000);
}
function fn() {
    console.log("Hi there after Delay");
}
delay(fn);
