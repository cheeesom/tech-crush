// if-else statements
let userAge= 21
if (userAge >= 18){   
   console.log("Welcome to club 9ja!")
}else { 
   console.log("sorry, youre not allowed to enter")
}
     
 let gender = "non-binary"

if (gender === "female"){ 
   console.log("Welcome to the ladies section")
}else if (gender === "male"){ 
   console.log("Welcome to the male section")
}else if (gender === "others"){
   console.log("Welcome to the other section")
} else {
   console.log("We don't know where you belong")
}


let userName = "Chisom"
let password = "Password123"

if (userName === "Chisom" && password === "Password123"){
    console.log("Login successful")
}else if (userName === "Chisom" || password === "Password123"){
    console.log("username or password is correct")
}else {
    console.log("login failed")

}

let voterAge = 16
if (voterAge >=18){
    console.log("Allow")
}else { 
   console.log("Sorry youre not allowed to vote")
}

// let DavidBodyType = "Fat"
// if (DavidBodyType === Fat){
//    console.log(true)
// } else{
//    console.log("Fat!!!")
// }

