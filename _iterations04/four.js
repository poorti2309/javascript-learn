   // FOR_EACH loop ---> Directly can call function without its name

   const coding = ["js", "ruby","java","python", "cpp"]

//    coding.forEach(function (val){
//     console.log(val);
//    })

// through Arrow function

// coding.forEach((val) => {
//     console.log(val);
// })
  /// this for each conatins --> items, index, arr

  // ForEach loop accessing value from an objects from an array

  const myCoding = [
          {
            languageName: "javascript",
            languageFileName: "js",

          },
          {
            languageName: "python",
            languageFileName: "py",
          },
          {
            languageName: "c++",
            languageFileName: "cpp",

          }
  ]

  myCoding.forEach((item)=>{
    //console.log(item.languageFileName);
  })

  // ForEach can also used to make map iterable

  const map = new Map()
  map.set('IN', "India")
  map.set('USA', "Unites States of America")
  map.set('Fr', "France")
  map.set('In', "India")

  map.forEach((  value, key) => {
    console.log(key, value);
  })


