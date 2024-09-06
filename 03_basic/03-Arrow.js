const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rohit"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);
// }                               // we can not use object in the function

// chai()

// const chai = function (){
//     let username = "vishal"
//     console.log(this.username);
// }

// const chai = function (){
//     let username = "vishal"
//     console.log(this.username);
// }

 //*********** Arrow Function ************ \\

const chai = () => {
    let username = "vishal"
    console.log(this.username);
}

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    // implict

// const addTwo = (num1, num2) => (num1 + num2)  // when we can use this () we can't user return keywoards

// const addTwo = (num1, num2) => {username: "vishal"} // undefined


const addTwo = (num1, num2) => ({username: "vishal"}) //{ username: 'vishal' }


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()