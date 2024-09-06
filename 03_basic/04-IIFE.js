// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB CONNECT`);
})(); // use ; to end the task 

( () => {
    console.log(`DB CONNECTED TWO`)
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("vishal")




