let item1 = "milk"
let item2 = "milo"
let item3 = "rice"

let items = ["milk", "milo", "rice", 1, 2, 4, true]
console.log(items[0])
console.log(items.length)

// for each method//declarative/named function method
let fruits = ["apple", "banana", "orange", "grape", "mango"]
let names = ["esther", "john","doe", "jane", "smith"]

fruits.forEach(function(fruit){
console.log("i eat" + fruit)
})
names.forEach(function(name){
console.log("Tech_Crush_2026_Cohort_6" + name)
})
// how to write arrow function for your forEach
// names.forEach((name) =>{
//  console.log(("Tech_Crush_2026_Cohort_6" + name)
//})

// let newFruits = fruits.forEach =(fruit =>fruit + "i eat")
// console.log(newFruits)

//map method //arrow function method

let scores = [90, 80, 70, 60, 50]
//let newScores = scores.map(score => score + 5) 
//let newScores = score.map( (x) =>{
    //return x + 5
    //console.log(newScores)
//})
let newScores = scores.map(score => {
    console.log("as a good teacher, i decided to add 5 marks to all my students")
    return score + 5
})
 console.log("newScores")

let students = ["esther", "john","doe", "jane", "smith"]
let nameTag = students.map(function(tag){
    return "Tech_Crush_2026_Chort_6" + tag
}) 
console.log(nameTag)

//filter method
let jambScores = [200, 250, 300, 150, 180, 200, 290, 100]
let passed = jambScores.filter((score) =>{
     return score >= 200
    })
    console.log(passed)

// let ages = [18, 25, 30, 15, 20, 35, 40]
// let adults = ages.filter(function(age){
//     return age >= 18
// })
// console.log(adults)
let ages = [18, 25, 30, 15, 20, 35, 40]
let adults = ages.filter((age) =>{
    return age >= 18
})
console.log(adults)

// Find
const studentsNames = ["john", "john", "Ada", "doe", "jane", "smith", "Bola", "John"]
const found = studentsNames.find((name) =>{
    return name === "john"
})
console.log(found)

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000]
let total = cartPrices.reduce(function(accumulator, currentPrice){
    return  accumulator + currentPrice;
}, 0) // accumulator, current price, initial price (preferably 0, but can be anything)
console.log(total);

// // arrow function version
let grandTotal = cartPrices.reduce((acc, price)=>{
return acc + price;
}, 0)
console.log(grandTotal);

//push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow"); // return data type for push is a number
// let newColors = colors.push("yellow");
// console.log(newColors)

let lastColor = colors.pop()
console.log(colors);
console.log(lastColor)

let firstColor = colors.shift();
console.log(colors);
console.log(firstColor)

let newLength = colors.unshift("purple"); //return data type for push is a number
console.log(colors);
console.log(newLength)

// * the return data type for push and unshift is the new length of the array after the
//operation while pop and shift return the removed element from the array
 