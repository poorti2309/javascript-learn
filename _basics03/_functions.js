function saymyName(){
    console.log("h");
    console.log("P");
}
// saymyName();

// function addTwoNumbers(num1, num2){
//    console.log( num1 + num2)
// }
// addTwoNumbers(3, null)

function userMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(userMessage("poorti"))
// console.log(userMessage("poorti"))

//Shopping cart FUnctionality

function calculateCArtPrice(...num1){  //these (...) are called rest operator which also called spread operator functionality depends on use case of rest operator it will store all parameters in array
    return num1

}

// console.log(calculateCArtPrice(200, 300, 400))

const user = {
    username : "poorti",
    prices: 499,
}
function handleOrder(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleOrder(user);
handleOrder({
    username : "kanha",
    prices: 399,
})

const newArray = [100,200, 300, 400];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))  //By intializing before the array
console.log(returnSecondValue([200, 300, 400]))  //paasing array direct in arguments 
