// if
// <, >, <=, >=, ==, !=, ===, !==

// const isUserloggedIn = true
// const temperature = 41

// if(temperature === 40){
//     console.log("less than 50");
// } else {
//     console.log("temperature is grater than 50");
// }

// console.log("Exexute")


// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power> ${power}`);
// }
 
// console.log(`user power: ${power}`);

// const balance = 1000

// if(balance) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.less("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}
