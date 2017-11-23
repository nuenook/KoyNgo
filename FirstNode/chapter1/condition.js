// IF condition only true and false
if( true === true) // one statement just no Curly bracket for clean code
    console.log(); // true

const a = 20;
let b = 2;

if (a > b) { // two statment use curly bracket
    b = b + a;
    console.log(b);
} else
  console.log('no compare');

  // 1 //
if (a == b) { }
if (a > b) { }
if (a < b) { }


 // 2 //
 if (a == b) { }
 else if (a > b) { }
 else if (a < b) { }

 // what's the different both ? 
 // debuging for see that.

// logic condition AND OR NOT are && || ! for symbol

// AND
// T && T = T
// T && F = F
// F && T = F
// F && F = F 

//OR
// T && T = T
// T && F = T
// F && T = T
// F && F = F

//NOT 
//  !T = F
//  !F = T

// go to assigment2.spec.js
