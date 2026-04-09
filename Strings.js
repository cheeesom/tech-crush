//length of a string
let stringText = "This is a class on string methods"
console.log (stringText.length)

//touppercase and tolowercase
let capitalLetters = stringText.toUpperCase ()
let smallLetters = stringText.toLowerCase ()
console.log (capitalLetters)
console.log (smallLetters)

//trim, trimstart, trimend
let str = " Hello World! "
let trimmedStr = str.trim ()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd() // Naming convention: Camel casing
//end_trimmed_str = str.trimEnd(): Naming convention: Snake casing
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signupName = " Chisom"
let signinName =  "Chisom"

if((signupName.trim()) === signinName){
    console.log("Welcome back, Chisom!")
 }else { 
    console.log("Invalid login Information")
 }

// indexOf and Includes: also called search method
let user_email = "ogbuuzoma413@techcrush@gmail.com" //return data type = numbers
let email_index = user_email.indexOf("@")
console.log(email_index)

let email_contains_at = user_email.includes("@") // includes method: return data type = boolean
console.log(email_contains_at)

//startwith and endwith
let userName = "techCrush Chisom 6"
//let token = "Bearer h117278tyssiwhwskhwd99039epChis6"
//let starts = token.startsWith("Bearer")
//console.log(starts)
let starts = userName.startsWith("techCrush") //return data type boolean
console.log(starts)

let ends = userName.endsWith("6") //return data type boolean
console.log(ends)

//slice and substring

let testString = "My Name is Chisom!"
let sliceString = testString.slice (-5)
let substringString = testString.substring (-5)
console.log(sliceString)
console.log(substringString)
 

//replace and replace all
let text = "Chisom is a techie. Chisom loves coding and Chisom loves teaching"
let replacedText = text.replace("Chisom", "She")
let replacedAllText = text.replaceAll("Chisom", "She")
console.log(replacedText)
console.log(replacedAllText)

// let text = "Chisom is a techie. Chisom loves coding and Chisom loves teaching"
// let replacedTextShe = text.replace("Chisom", "She")
// let replacedAllWithShe = text.replaceAll("Chisom", "She")
// console.log(replacedTextShe)
// console.log( replacedAllWithShe)

//Split 

const sentence = "LANGUAGES: Javascript, Python, Java, C++"
let splitSentence = sentence.split(" ") //return data type array (of smaller strings)
console.log(splitSentence)

let example = "she is a girl, she is a teacher, she is eating"
let splitExample = example.split(" ")
console.log(splitExample)

