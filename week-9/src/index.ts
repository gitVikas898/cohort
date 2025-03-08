// // write a function that greets a user given their firstname
// function greet(firstname:string,lastName:string){
//     console.log(`Hello ${firstname}, How's it going`);
// }
// greet("Vikas","Singh");
// //type infrence : ts automatically infers what the function will return based on input types
// //good to still mention the required return type 

// function sum(a:number,b:number):number{
//     return a+b;
// }

// console.log(sum(100,200))

// function isLegal(age:number):boolean{
//     if(age>=18){
//         return true;
//     }
//     return false
// }

// console.log(isLegal(19))

// //create a function that takes anoter function as input and runs it after 1 second

// function delay(fn:()=>void){
//     setTimeout(fn,2000);
// }

// function fn(){
//     console.log("Hi there after Delay")
// }

// delay(fn);

// const user = {
//     name:"Vikas",
//     age:26,
//     email:"vikassingh1865@gmail.com",
// }

// interface user{
//     name:string,
//     age:number,
//     email?:string  //optional argument runs even if not provided
// }

// function isLegal(user:user){
//     if(user.age>18){
//         return true;
//     }
//     return false;
// }

// console.log(isLegal(user))

interface Person{
    name:string,
    age:number,
    greet(phrase:string):void
}

class Employee implements Person{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e1 = new Employee("Vikas",26);
e1.greet("Good Luck")