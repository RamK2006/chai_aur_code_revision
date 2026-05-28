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
console.log(booleanIsLoggedIn); // for every non zero value -> true
//  false at 0 and "" empty string


let nber = 33
let stringnber = String(nber)
console.log(typeof stringnber);

// ************* Operations =>

let value =3
let negvalue = -value
console.log(negvalue); //-3

let str1 = 'Radhe '
let str2 = 'Radhe'
let str3 = str1 + str2
console.log(str3)

// where the problem occurs 
console.log("1"+2); // 12
console.log(1+"2"+2+4); // 1224 , means add ni krega na
console.log(1+2+3+"3"); // 63, but ab idhr to isne add krdiya, problem h

console.log( (3+4)*5%9); // ese code ni likhte, likhte h to hire ni hote, to ni likhte

// special conversions

console.log(+true); // true nahi 1 dega ans
//Ye unary plus operator hai because iske sirf ek operand hai.

//console.log(true+); // error dega ye kyuki right m value nhi ,binary operator addition hai

console.log(+"") // 0 dega ans 

// JavaScript mein unary + operator type conversion karta hai.
// Ye value ko Number mein convert karne ki koshish karta hai.