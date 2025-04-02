// For OF loop

//[{}, {},{}]

const arr = [1, 2, 3, 4, 5,]

for (const val of arr) {
    // console.log(val);
            
}

const greetings = "Hello World!"
for (const greet of greetings){
//     console.log(`Each char: ${greet}`)
 }

 // Maps

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "Unites States of America")
 map.set('Fr', "France")
 map.set('In', "India")

//  console.log(map);

 for (const[key, value] of map) {
    //console.log(map.set(key, ':-', value));
    
 }

 const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "swift by apple"
 }

 for (const key in myobject){
   // console.log(`${key} shortcut is for ${myobject[key]}`);
 }

 const programming = ["js", "rb", "py", "java", "c++"]

 for (const key in programming) {
    console.log(programming[key]);
 }

 // Map par loop nhi chalta kyuki Map is not iterable one