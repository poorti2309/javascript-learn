const course ={
    coursename: "JavaScript from Scratch & JQuery",
    price: "999",
    courseInstructor: "Hitesh Choudhary",
    name: "poorti",
}
//Destructure of code as dot method for access is too long we use this one.

const {courseInstructor: instructor} = course

console.log(instructor)

// const navbar = ({compnay}) => {
//   console.log(compnay)
// }
// navbar(compnay = "hitesh")  // Used in react 

