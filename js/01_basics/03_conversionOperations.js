let score1 = '33'

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1);
console.log(typeof(valueInNumber1));

let nbr = '33abc'
let nbrInnbr = Number(nbr)
console.log(typeof(nbrInnbr)); // will give Number as answer
console.log(nbrInnbr);// NaN


let score = null;

console.log(typeof score);
console.log(typeof score);// object

let valueInNumber = Number(score);
console.log(typeof valueInNumber);// number
console.log(score); // null


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // for every non zero value -> true, false at 0 and "" empty string


let nber = 33
let stringnber = String(nber)
console.log(typeof stringnber);
