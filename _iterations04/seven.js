// reduce method

const myNums = [1,2,3]
const myAcc = []
const myCurr = []

// // This line:

// return acc+num, intialValue, console.log(acc);

// is incorrect because the comma operator evaluates multiple expressions and returns the last one.

// Correct Syntax : array.reduce((acc, num) => { return acc + num; }, initialValue);


const intialValue =0;
const total = myNums.reduce((acc,curr) => {
    // myAcc.push(acc);
    // myCurr.push(curr);
    //Another way to access both
    //console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
},intialValue)
// console.log(myAcc);
// console.log(myCurr);
// console.log(total);


///----------- mainly used in shopping cart Functuionality---------------//



const shoppingCart = [
    {
        itemName: "JavaScript course",
        price: 299,
    },
    {
        itemName: "Python Course",
        price: 99,
    },
    {
        itemName: " Android Development",
        price: 599,
    },
]

 const totalCartPrice = shoppingCart.reduce((pre,curr) => {
    return pre + curr.price

}, 0)

console.log(totalCartPrice)

