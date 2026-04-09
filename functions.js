//function function name (){
//code to be executed
//console.log
// }

//without parameters
 function greet(){
    console.log("Welcome back, Chisom!")
}
greet()

//with parameters
function farewell(name){
    console.log("see you again" + name)
}
farewell ("Chisom")

//if theres no return statement in your function there is no need to call console.log outside

//with parameters (numbers version static and dynamic functions)
function add (){
    let a = 5
    let b = 10
    return a + b
}
console.log(add ())

function addition (a, b){
    return a + b
  }
console.log(addition (2, 3))

function isAdult (age){
    return age >= 18
 }
 console.log (isAdult(20))
 console.log (isAdult(16))
 console.log (isAdult( 18))
