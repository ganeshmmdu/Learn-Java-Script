const accountId = 144553;
let accountEmail = "vishalkumar01@gmail.com"
var accountPassword = "1234"
accountCity = "Muzaffarpur"
let accountState;

// accountId = 2// not allowed
accountEmail = "abcd@gmail.com"
accountPassword = "4321"
accountCity = "Ambala"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
