const myNums = [1,2,3,4,5,6,7,8,9,10]
console.log(myNums);

// Filter function returns Some type of value but this myEach function returns undefined only because it doesn't return anything that's why we can store filter funvtion output it in a variable

//------------Intersting Fact: whenever you use bitwise operator for even number then use with parenthesis as (num&1)==0 otherwise it will interpretated as num & (1==0)=> num&0 that is always Zero because "==" opeartor has higher precendence than & operator So it will evalute expression like as I mentioned-----------//

// const newNums = myNums.filter((num)=> {
//     return (num & 1) == 0
// })
// console.log(newNums);

// Using For Each loop

const newNums = []

myNums.forEach((num)=> {
    if((num&1)==0){
        newNums.push(num)
    }
})
//console.log(newNums);



