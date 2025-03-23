// console.log( 2>1 )
// console.log( 2<1 )
// console.log( 2>=1 )
// console.log( 2<=1 )
// console.log( 2==1 )
// console.log( 2!=1 )

// console.log( "2" > 1 ) //true
// console.log( "2" < 1 ) //false
// console.log( "2" >= 1 ) //true
// console.log( "2" <= 1 ) //false
// console.log( "2" == 1 ) //false
// console.log( "2" != 1 ) //true

// These conversions should be avoided because they decrease the readibility and this happens because JS is somehow unpredictable as it sometiems convert null into NaN and sometimes with 0.



console.log(null >= 0) //true
console.log(null > 0)//false
console.log(null < 0)//false
console.log(null == 0)//false

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false

