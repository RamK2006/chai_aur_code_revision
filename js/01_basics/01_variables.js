const accountId = 123333432
let accountEmail = "hahahihi@gmail.com"
var accountPassword = '2322243#king'
accountcity = "Jaipur"
let accountState;

//accountId = 20 can't be changed - not allowed

accountEmail = "hehehehe@gmail.com"
accountPassword = "rfsfsfsss"
accountcity = "Pune"

// now it can be hectic to print all these alag alag
// we use method named as table 

console.table([accountId, accountEmail, accountPassword, accountcity])

/*
multi line comment
*/

// prefer not to use var because of disfunction in block scope and function scope

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);
//without value will be undefined