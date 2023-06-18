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

// console.log("EXERCISE 3:\n==========\n");
//EXERCISE NUMBER 3

// Exercise 3: Which Quadrant?
// Write a function that receives two parameters, x and y coordinates in the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis, or what quadrant the point lies in.

// For example:

// (0, 2) is on the y axis
// (1, 2) is in Quadrant 1
// (-6, 18) is in Quadrant 2

function whichQuadrant(x = 0, y = 0){
    let xAxis = `(${x}, ${y}) is on the x axis)`;
    let yAxis = `(${x}, ${y}) is on the y axis)`;
    let quadrant1 = `(${x}, ${y}) is in Quadrant 1)`;
    let quadrant2 = `(${x}, ${y}) is in Quadrant 2)`;
    let quadrant3 = `(${x}, ${y}) is in Quadrant 3)`;
    let quadrant4 = `(${x}, ${y}) is in Quadrant 4)`;
    let origin = `(${x}, ${y}) is THE ORIGIN! `;
    if ((x == 0)&&(y == 0)){
        console.log(origin);
    }
    else if (x == 0){
        console.log(yAxis);
    }
    else if (y == 0){
        console.log(xAxis);
    }
    else if((x > 0)&&(y > 0)){
        console.log(quadrant1);
    }
    else if((x < 0)&&(y > 0)){
        console.log(quadrant2);
    }
    else if ((x < 0)&&(y < 0)){
        console.log(quadrant3);
    } 
    else if ((x > 0)&&(y < 0)){
        console.log(quadrant4);
    } 
    }


whichQuadrant(0, 0);


//EXERCISE NUMBER 4

// Exercise 4: What type of triangle?
// Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side), you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

// For example:

// Sides 1, 2, 2 make an isosceles triangle
// Sides 1, 1, 2 make an invalid triangle

function typeOfTriangle(side1, side2, side3){
    let triangleStyle;
    if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) {
        if((side1 == side2) && (side2 == side3)){
            triangleStyle = "equilateral";
        }
        else if((side1 != side2) && (side2 != side3) && (side3 != side1)) {
            triangleStyle = "scalene";
        }
        else {
            triangleStyle = "isosceles";
        }
    } else
    triangleStyle = "Sorry. Not a triangle."
    console.log(triangleStyle);
    return triangleStyle;
}
typeOfTriangle(1, 1, 1);

// EXERCISE NUMBER 5

// BONUS Exercise 5: Data Plan Status
// Write a function that will display feedback on cell phone data usage. Cell phone plans for this particular company give you a certain amount of data every 30 days which must be used or they are lost (no rollover). We want to track the average amount of data used per day and inform the user if they are using too much data or can afford to use more.

// Write a function that accepts the following parameters:

// planLimit: amount of data in the plan per 30 day period
// day: the current day in the 30 day period
// usage: the total amount of data used so far
// The function should compute whether the user is over, under, or right on the average daily usage under the plan. It should also inform them of how much data is left and how much, on average, they can use per day for the rest of the month. If they’ve run out of data, it should inform them of that too.

// For example, if the user enters planLimit = 100, day = 15, and usage = 56, your program should print out something similar to the following.

// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.

function cellPhoneUse(planLimit, day, usage){
    let currentAverage = usage/day;
    let projectedAverage = planLimit/30;
    let remainingData = planLimit - (day * currentAverage);
    let remainingDays = 30-day;
    let statusMessage; 
    let aboveOrBelow;
    //let projectedUsage = remainingDays * currentAverage; 



    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average daily use: ${(projectedAverage).toFixed(2)}. GB/day`);

    if (currentAverage > projectedAverage){
        statusMessage = "EXCEEDING"; 
    } else if (currentAverage < projectedAverage) {
        statusMessage = "UNDER";
    } else {
        statusMessage = "AT";
    }

    if (((((currentAverage * 30)) - planLimit).toFixed(2)) > 0){
        aboveOrBelow = "EXCEED";
    } else {
        aboveOrBelow = "FALL BELOW"
    }


    console.log(`You are ${statusMessage} your average daily use ${(currentAverage).toFixed(2)} GB/day`);
    console.log(`continuing this usage, you'll ${aboveOrBelow} your data plan by ${((currentAverage * 30)-planLimit).toFixed(2)} GB.`);
    //needed to include this in case we wind up dividing by 0
    if(remainingDays == 0){
        console.log(`You are out of days for this cycle. You have used ${usage}GB of data.`);
    }
    else {
    console.log(`To stay below your data plan, use no more than ${(remainingData/remainingDays).toFixed(2)} GB/day.`);
    }
   
}

cellPhoneUse(100, 15, 56);
cellPhoneUse(50, 10, 25);
cellPhoneUse(100, 30, 100);