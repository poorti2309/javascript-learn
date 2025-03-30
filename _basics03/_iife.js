// Immeditely Invoked Function Expressions (IIFE)
//Global Scope ke pollution ko Hatane ke liye IIFE ka use karte hain

/// Named IIFE => Function ke name ke sath
// How to use two IIFE --> Seperate by semicolon

(function chai(){
    console.log(`DB Connected`)
})();
// (function definition)(Function execution);--> Semicolon is needed to stop the execution of this IIFE as sometimes it can't stop it

((name) =>{
    console.log(`DB Connected TWO ${name}`)
})('hitesh')