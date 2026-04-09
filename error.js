//syntax error
//this error occurs when you forget to add something like a bracket
//e.g console.log(5+3 without a bracket itll throw a syntax error

//reference error
//this error occurs when you used a variable you havent/didnt create
//e.g let name = "Chisom"
//console.log(myName) this is going to throw an error because myName wasnt created

//type error
//this error occurs when you use the wrong method the wrong way or used a value/data type the wrong way
// let age = 25
// console.log(age.length())
//this is going to throw a type error because to .length is a property not a method hence no need for the
//() after it

//error handling
//try AND catch; lets your program handle errors gracefully instead of crashing

try{
    //code that might fail goes here
    let result = 10/0;
    console.log(result);
    undefinedfunction(); // this will throw an error!
    console.log("This line will not run.");
} catch (error){
    //this only runs ONLY if something goes wrong
    console.log("An error occurred:" + error.name , error.message);
}

console.log("This program continues here.");

try{
let age = 25
console.log(age.length())
} catch (error){
    console.log("An error occurred." + error.message);
}

//finally
function loadUserData(userID) {
    console.log("Start loading data...");
    try{
        if (!userID.startsWith("BAD")) {
            throw new error("User ID must start with BAD");
        }
    } catch (error){
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection."); // Always runs
    }
}

loadUserData("BAD-1234"); //Data loaded for user: 5 --> loading complete.
// loadUserData(-1); //Failed: User ID must be... --> Loading complete.