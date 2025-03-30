// Scope 
// GLobal scope is different for console variable and in editor node variable

// we don't use var also because it prints value of last time decelaration of variabel irrespetive of scope of variable
// that's why we use let instead of var
// if (true){
//     var c=200
// }
// var c=300
// console.log(c)

function one() {
     const username = "poorti"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //console.log(website) parent can't access childs details but viceversa possible
        two();
}

one()


// Accessing also depend on how you have decalred the function as direct function by holding it in variable as in direct it before function declaration but not in second method
console.log(addOne(3))
function addOne(num){
    return num + 1
}
// console.log(addTwo(3))
const addTwo = function(num){
     return num+=2
}
console.log(addTwo(3))


