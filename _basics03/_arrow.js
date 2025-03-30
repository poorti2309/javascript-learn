// this --> Current Context(value)

//  const Chai = function userName(){
//    let user = "poorti";
//     console.log(`Usename is ${this.user}`)
// }

// Chai();
// user = "Sam"
// Chai()

 // Arrow function () => {}
//    const addTwo=  (num1,num2) => {
//     return num1+num2   //Explicit return
//    }
//    console.log(addTwo(3,4))
// in arrow function if we use curly braces then it compulsory to use return but in parenthesis not necessary called Implicit return

//    const addTwo = (num1 , num2) => (num1+num2)

   const addTwo = (num1 , num2) => ({username : "poorti", prices : 499})
   console.log(addTwo(3,4))
