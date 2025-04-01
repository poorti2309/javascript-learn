const userEmail = []

//Somevalues are considered as total truth ot total false values

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

// To check Array id Empty or not

if(userEmail.length === 0){
    console.log("Array is Empty")
}

// To check is Object empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// nullish Coalescing Operator (??): null undefined ---> used to handle null or undefined output from server 
// to get non-null value among all

// val1 = 5 ?? 10;
// val1 = null ?? 10;
//  val1 = 10 ?? null;
// val1 = undefined ?? 10;
// val1 = null ?? undefined;
val1 = null ?? 10 ?? 10;  // returns first true value

console.log(val1);
// Don't confuse with ternary operator with this 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

