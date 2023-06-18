console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 1: Print Odds Continued
// In the past, we created a selection statement inside a loop that counted from 1 to 100 and only printed out the odd numbers.

// Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

// Declare a function named printOdds using declaration notation (function <name>(){...})

// The function should take in one parameter named count

// The function body should:

// contain a for loop that counts to the parameter passed in,
// an if/else statement that determines if the current value is odd,
// and then console.log() the odd value to the console
// BONUS: Now that you do not know exactly what number may be passed in as count, use an if statement to account for a negative count being passed in.


function printOdds(count){
    if(count == 0){
        console.log("The number should not be 0.");
    }

    if(count < 0){
        for(let i = -1; i >= count; i--){
            if(i % -2 == -1){
                console.log(i);
            }
        }
    }

    if (count > 0) {
        for(let i = 1; i <= count; i++){
            if(i % 2 == 1){
            console.log(i);
            }
        }
    }
}
printOdds(0);

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// Exercise 2: Legal?
// Write a function that receives a name and age, and prints a greeting message to the console using the name.

// Declare a function named checkAge using declaration notation (function <name>(){...})

// The function should take in two-parameter named userName & age

// The function body should:

// declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
// declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
// an if/else statement that determines if the age value is below 16,
// and then console.log() the correct message to the console.
// BONUS: Remember that parameters are optional, and no userName or age value could be passed in. Correctly account for no parameter being passed in.

function checkAge (age, userName = "Person"){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    let undefinedAge = `Sorry, but I can't tell how old you are!`;
    if(!Number.isInteger(age)){
        console.log(undefinedAge);
    }
    else if (age >= 16){
        console.log(aboveSixteen);
    } else{
        console.log(belowSixteen);
    }
}

checkAge(9000, "Fred");

// Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");