// Primitive DataType

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 213479465456n


// Non-Primitve DataType

// const heros = ["shaktiman", "naagra", "doga"];

// let myObj = {
//     name: "vishal",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);


// *************************************  \\

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "vishalkumardotcom";

let anothername = myYoutubename;
anothername = "codewithvishal"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "vishalkumar@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

