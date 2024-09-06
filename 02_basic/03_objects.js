// Singleton \\
// object.create

// Object literal

const mySym = Symbol("key1")

const Jsuser = {
    name: "vishal",
    "full name": "Vishal Kumar",
    mySym: "mykey1",
    age: 20,
    location: "Ambala",
    email: "vishalkumar@gmail.com",
    isLoggedIn: false,
    latLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "vishalkumar01@gmail.com"
Object.freeze = "vishal;kumar@google.com"

// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());