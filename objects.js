let obj = {
name: "Esther",
age: 25,
profession: "Developer",
}

let student = {
    name: "Ngozi Adeyemi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
}
// The two ways to access informations in an object
// access information square bracket[]
console.log(student.name)
console.log(student["age"])

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city:  "Lagos"
}
// first method declare a new variable and add the key to .element of what youre 
// looking for, then console log them individually(long/old method)
let newName= employee.name
console.log(newName)
let newRole = employee.role

// or second method destructuring using curly bracket{} faster method, assign all leys to one keyword
//(var, let, or const) then enclose the keys in a curly bracket then equate it 
// to the variable e.g student, employee in this case, then console log each key individually

const {name, role, salary, } = employee
console.log(name)
console.log(salary)

let courses = {
    CSC401: "Data structures",
    CSC402: "Algorithms",
    CSC403: "Operating Systems",
    CSC404: "Database Systems"
}
//  Renaming while detructing; This method the curly bracket method
//  let {CSC401:CSC400} = courses
//  console.log(CSC400)
// // OR
let CSC400 = courses.CSC402
 console.log(CSC400)

let person = {
    name: "Amina",
    opay: true,
}
console.log(person)
let {opay: palmpay} = person
console.log(palmpay)


// let nombre = "Esther"
// let mi_llama = nombre
// console.log(mi_llama)

let profile ={name: "Ada", age: 22};
// copy and add new properties
let updatedProfile ={
...profile,
city: "Abuja"
};

console.log(updatedProfile);

const {nombre,...rest } = {
nombre: "Emeka",
age: 25,
city: "Lagos"
};

const user = {
    name: "Esther",
password: "12345",
isFemale: true,
age: 25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// for in 
// note the for in can also be manipulated to get the values as seen in the highlighted console.log below
for(let key in user){
    // console.log(key)
    //  console.log("these are the keys :" + key)
    // console.log("these are the values:" + user[key])
}

// for of
// for(let values in user){
//     console.log(values)
//     console.log("these are the values :" + user[values])
// }

