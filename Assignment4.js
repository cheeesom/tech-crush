//Difference between Array and Higher Order Array Method
//point 1
//Array methods are often imperative and usually require step by step instructions. While,
//Higher order array are usually declarative (it describes the desired outcome).
// pont 2
// Array methods often return the elements itself or modify the original array in place. While,
//Higher order array method, typically returns a new array or a single computed value
//point 3
//Array methods are limited to single element operations or requires manual looping for mass changes. While,
//Higher order array methods are usually very flexible for complex transformations filtering, and aggregations

//Section A forEach () Question 1
const numbers = [2, 4, 6, 8, 10]
 let number = numbers.forEach(function(number){
     console.log(2*number)
  })

//Section A Question 2
  const names = ["Esther", "John", "Ada", "Mike"]
  let newNames = names.forEach(function(name){
    console.log("Hello " + name + "!")
  })

  //Section B Map() Question 3
  //Ma please i had to change the original Array from const numbers
  // to const figures because we already have a const numbers in section A 
  //and it kept throwing an error i couldnt redeclare
  const figures = [1, 2, 3, 4, 5];
  let newFigures = figures.map(function(figure){
    console.log(figure ** 2)
  })
//Section B Question 4
  const prices = [100, 200, 300];
let newPrices = prices.map((price) => {
    return price * 0.9
})
console.log(newPrices)

//Section C: Filter () Question 5
// same thing here i had to replace numbers with digits here to prevent it throwing me an error
const digits = [5, 12, 8, 20, 3];
let newDigit = digits.filter((digit)=>{
  return digit > 10
})
console.log(newDigit)

//Section C Question 6
const ages = [15, 22, 17, 30, 18]
let newAge = ages.filter((age) =>{
  return age >= 18
})
console.log(newAge)

//Section 7 Optional
//same thing here i had to replace numbers with characters to prevent error
const characters = [10, 15, 20, 25, 30];
//first using the filter method to get numbers higher than 20
let newCharacters = characters.filter((character)=>{
  return character > 20
})
console.log(newCharacters)

//using map () method to double the remaining numbers
let doubleNewCharacters = newCharacters.map((newCharacter) =>{
return newCharacter * 2
})
console.log(doubleNewCharacters)