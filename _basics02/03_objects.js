// singleton 
//object.create

// Objects literals
const mySym = Symbol("Key1")

const myUser = {
    name: "poorti",
    "full name": "Poorti Gupta",
    mySym: "myKey1", // It is necessray to take symbol one in brackets otherwise they will take it as string not as Symbol.
    age:18,
    email: "poortigupta@google.com",
}
//We can access these all through dot method also but they all will bw taken as string as you can't take fuulname in it as we can't declare it in dot method that's why we needed the bracket method
console.log(myUser.email)
console.log(myUser["email"])
// console.log(myUser."fullname") // Giving Error
console.log(myUser["fullname"]) //It will work
console.log( myUser.mySym) //--> String
console.log(typeof myUser[mySym])







