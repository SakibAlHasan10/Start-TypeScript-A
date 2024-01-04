// built-in data types : number, string, boolean, void, undefined, null

let userId:number;
let firstName :string;
let lastName : string;
let fullName : string;
let isActivated : boolean;

userId = 102;
firstName = "Sakib";
lastName = "Al Hasan";
isActivated = true;

// concat 
fullName = firstName.concat(lastName);

console.log(fullName.split(" "))
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(userId)

// void function 
// Functions that do not return anything are void
function display(){
    console.log("Hi i'm display")
}
display()