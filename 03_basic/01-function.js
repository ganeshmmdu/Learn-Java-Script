

function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}


const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){    // when we should pass the value like (username = "vishal") , the value  is not change any line of code that is written 
    if(username === undefined){            // it should also written in (!username)
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vishal"));
  
