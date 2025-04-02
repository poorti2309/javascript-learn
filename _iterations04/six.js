const myNums = [1,2,3,4,5,6,7,8,9,10];
//Add 10 to each 
//using ForEach loop 
// prints all as individual number not return
myNums.forEach((num)=> {
    //console.log(num+10);
})

// Using map method
  // return all numbers in an array
const newNumers = myNums.map((num)=> num+10)
//console.log(newNumers);


// Chaining of loops----> Operation of second loop will be done on resultant array of first one

const newNums = myNums
              .map((num)=> num*10)
              .map((num) => num+1)
              .filter((num) => num>=40)

console.log(newNums);              