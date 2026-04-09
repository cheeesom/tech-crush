
//Do the following (write code):
//1. Remove extra spaces.
//2. Check if it starts with "Hello".
//3. Check if it ends with "WORLD!".
//4. Convert to lowercase.
//5. Find position of "WORLD".
//6. Replace "WORLD" with "Nigeria".
//7. Replace all "L" with "1".
//8. Get characters from position 3 to 

const msg = "  Hello, WORLD!  ";
const trimmedMsg = msg.trim ()
const checkStarts = trimmedMsg.startsWith ("Hello")
const checkEnds = trimmedMsg.endsWith("WORLD!")
const smallLetters = trimmedMsg.toLowerCase()
const msgIndex = trimmedMsg.indexOf ("WORLD")
const replaceTrimmedMsg = trimmedMsg.replace("WORLD", "Nigeria")
const replaceAllTrimmedMsg = trimmedMsg.replaceAll("L", "1")
const sliceTrimmedMsg = trimmedMsg.slice("3", "8")

console.log(trimmedMsg)
console.log(checkStarts)
console.log(checkEnds)
console.log(smallLetters)
console.log(msgIndex)
console.log(replaceTrimmedMsg)
console.log(replaceAllTrimmedMsg)
console.log(sliceTrimmedMsg)


