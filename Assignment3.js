//Problem 1
//Substring & slice
const str = "Nigeria is awesome";
// Extract Nigeria using substring()
let Nigeria = str.substring(0, 7)
console.log(Nigeria)

//Extract awesome using slice ()
let awesome = str.slice(-7)
console.log(awesome)

//Get is using slice
let getIs = str.slice(8,10)
console.log(getIs)

//Problem 2
//Split
const name = "John, Jane, Doe";
//Split into an array using comma
let comma = name.split(",")
console.log(comma)

//Join with space
let joinWithSpace = comma.join(" ")
console.log(joinWithSpace)

//Const path
const path = "/user/home/docs";
//Split by slash (/)
let splitBySlash = path.split("/")
console.log(splitBySlash)
//Get home using split & index
const homeIndex = splitBySlash[2]
console.log(homeIndex)

//Problem 3
//Mix
const email = "user@example.com";
//Get username (user) using split()
let userName = email.split("@example.com")
console.log(userName)
//Check if its a .com domain using endsWith()
let endsWith = email.endsWith(".com")
console.log(endsWith)
//Replace @ with AT using replace()
let replaceAt = email.replace("@", "AT")
console.log(replaceAt)