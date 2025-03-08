"use strict";
// // write a function that greets a user given their firstname
// function greet(firstname:string,lastName:string){
//     console.log(`Hello ${firstname}, How's it going`);
// }
// greet("Vikas","Singh");
// //type infrence : ts automatically infers what the function will return based on input types
// //good to still mention the required return type 
class Employe {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e1 = new Employe("Vikas", 26);
const teamLead = {
    name: "Vikas",
    startDate: new Date(),
    department: "Software Developer",
};
