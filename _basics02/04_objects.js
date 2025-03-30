// const tinderUser = new Object()
const tinderUser = {};

tinderUser.name = "Poorti"
tinderUser.id = "123sdf"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmial.com",
    fullname: {
        userfullname: {
            firstname : "poorti",
            lastname : "gupta"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2: "b"}
const obj2 = {4:"t", 3: "b"}
const obj3 = {8:"a", 9: "b"}

//const obj3 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

//spreading method

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const instaUser =[
            {
                id : "123abc",
                email: "poortigupta@gmail.com"
            },
            {
                id : "2",
                email: "gpoorti2309@gmail.com",
            }

        ]

        console.log(instaUser[0].email);
        console.log(instaUser)
        console.log(Object.keys(tinderUser))

