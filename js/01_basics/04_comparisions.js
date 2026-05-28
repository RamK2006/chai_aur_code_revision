/*console.log(2>1); // boolean output
console.log(2>= 1);
console.log(2<1);
console.log(2==1);
console.log(2!=1); basic h ye ab */

console.log("02">1); // automatic conversion
// but this is a unpredictable output generator 
// this time it converted itself
// typescript doesn't allow this

// one interesting thing, although to be avoided
console.log(null>0);
console.log(null == 0);
console.log(null >= 0); // ek bas ye true aaya, unpredictable but it has a rule -->
/* the reason is that an equality check == and comparisions < > <= >= work differently
comparisions convert null to a number treating it as 0
so because of this the third one is true*/

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0); 
// all false

// comparision and equality check are different things

// === strict check
//with values, checks data type too
console.log("02"===2);
// so false