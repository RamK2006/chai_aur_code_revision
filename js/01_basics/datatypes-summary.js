// primitive and non primitive data types : based on how data is stored in memory and how it is fetched
/* Primitive :
7 types : call by value 
String, Number, Boolean, null, undefined, Symbol( kisi component ko unique bnane k lie), Bigint

Reference type (Non primitive):
array, objects, functions 

*/
const score = 100; // means js is dynamically typed
// ni smjha to ye le proof
let a=10;
a="hello";
a=true;
// abto smja hoga

const id = Symbol('123')
const id2 = Symbol('123')// ab ye dono never same jese means id == id1 false aaega hmesha


// array 
const heroes = ['shaktimaan','naagraj','doga']

// objects

let myobj = {
    name : "bissa ji",
    age : 21,
}

// function 

const myfxn = function(){
    console.log("This is a fxxnn");
    
}

console.log(typeof myfxn);// function object aaega

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack -> primitive type  ( always gets a copy of original variable in this kind)
// heap -> non primitive (always we get reference of original variable)

let ytchnl = 'ramjikichaal.com'
let another = ytchnl
console.log(another);
another = "King Shit"
console.log(another);

