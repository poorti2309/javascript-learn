const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
//const myn1 = myArr.slice(1,3)
// const all_heros = marvel_heroes.concat(dc_heroes)
// console.log(all_heros)

// Instead of concate we use spread method like drop a glass and spread it's pieces

const all_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_heros)

const another_array = [1,2,3, [4,5,6], 7,[2,[3,4],5]] // [1,2,3,4,5,6,7,2,3,4,5,8]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("poorti"))
console.log(Array.from("poorti"))  //Converting string to an array
console.log(Array.from({name: "poorti"}))  // interseting case as you have mention about creating array

let score1 = 100
let score2 = 200
let score3 = 300
const scores = [score1, score2, score3]
console.log(scores)
console.log(...scores)

