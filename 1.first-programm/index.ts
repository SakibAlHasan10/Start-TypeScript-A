// js
let userName:string = "Sakib Al Hasan";
// not possible userName = 345;
let age:number = 25;
console.log(userName)
console.log(age)

// tsc index.ts -> index.js -> node index.js
// tsc index.ts --watch

function addNumbers(num1:number,num2:number){
    console.log(num1+num2)
}

addNumbers(20,30)