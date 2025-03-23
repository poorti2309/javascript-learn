// Types of datatypes
//Primitive 
// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //Number
const scoreValue = 100.3 //Number

const isLoggedIn = false //Boolean
const outsideTemp = null
let userEmail = "poorti@example.com"; //String

//Symbol is used just as to give unique id's to same data inputs even if data is same they not
   // considered as same
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)//false
 const bigInt = 56448974541165464894541n   //this n behind make this number to be bigInt

 //  Refrences datatypes (Non Primitive)

 // Array, Objects, Functions

 const heros = ["ironman", "spiderman", "durgamaa"] //Arrays
 let myObj = {            //object
        name: "Poorti",
    age: 22,
 }

 const myFunction = function(){
    console.log("Hello World")
 }

 // JavaScript is a dynamically typed language because datatype will aotomatically assigned at the time of compilation or code execution
