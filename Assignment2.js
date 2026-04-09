// Give a well detailed explaination of the difference betweenthe for and while loop with code examples

//THE FOR LOOP
//The For Loop: A for loop allows you to repeat a block of code a specific number of times, it is usually 
//widely used when the number of iterations is known in advance, which makes it easy to iterate over arrays
//lists, sequences, generate number series and perform repetitive task efficiently.

//Code Example

let arrayofFruits = ["Pawpaw", "Mango", "Watermelon", "Banana", "Beetroot", "Kiwi", "Pineapples"]

for (let i = 0; i < arrayofFruits.length; i++){
    console.log(arrayofFruits[i])
}

var Fruits = ["Pawpaw", "Mango", "Watermelon", "Banana", "Beetroot", "Kiwi", "Pineapples"]


//for (let Fruits = Fruits.length;){
    console.log(Fruits.length)
//}


//The While Loop: The while loop is a block of code to be executed repeatedly whie the condition is true 
//and is perfect for conditions where the number of iterations is uncertain. 
//Hence, perfect for conditions that eventually becomes false.

//Code Examples
// A music player will continue to play will continue to play songs while there is available
//song in the playlist it stops only when the condition having another song to play is no longer true

let count = 16
while (count >= 0){
    console.log (count)
    count --
}
   console.log("Album songs finished!")

