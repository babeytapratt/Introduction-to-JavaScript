/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 19;
  if(votingAge > 18) {
    console.log("true")
  } else {
    console.log("false")
  }

console.log(votingAge)


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var age = 20;
var drink = (age >= 21) ? "beer" : "Juice";

console.log(drink);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number('1999');

console.log(Number);





//Task d: Write a function to multiply a*b
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2,5));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function dogYears(myage) {
  return myage * 7;
}

console.log(dogYears(39));




/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996



function dogFeeder(weightInPounds, ageInYears) {
  let adultDog = 1
  let puppy = (0-.9)

    if (weightInPounds <= 5 && adultDog) {
    return weightInPounds * .05;
    } else if (weightInPounds > 5 <= 10 && adultDog) {
    return weightInPounds * .04;
    } else if (weightInPounds > 10 <= 15 && adultDog) {
    return weightInPounds * .03;
    } else if (weightInPounds > 15 && adultDog) {
    return weightInPounds * .02;
    } else if (weightInPounds < 5 && ageInYears >= .02 <= .04) {
    return ageInYears * .1;
    } else if (weightInPounds < 5 && ageInYears >= .05 <= .07) {
    return ageInYears * .05;
    } else if (weightInPounds < 5 && ageInYears >= .08 <= .09) {
    return ageInYears * .04;
    } else if (weightInPounds > 5 <= 10 && ageInYears >= .02 <= .04) {
    return ageInYears * .1;
    } else if (weightInPounds > 5 <= 10 && ageInYears >= .05 <= .07) {
    return ageInYears * .05;
    } else if (weightInPounds > 5 <= 10 && ageInYears >= .08 <= .09) {
    return ageInYears * .04;
    } else if (weightInPounds > 10 <= 15 && ageInYears >= .02 <= .04) {
    return ageInYears * .1;
    } else if (weightInPounds > 10 <= 15 && ageInYears >= .05 <= .07) {
    return ageInYears * .05;
    } else if (weightInPounds > 10 <= 15 && ageInYears >= .08 <= .09) {
    return ageInYears * .04;
    } else if (weightInPounds > 15 && ageInYears >= .02 <= .04) {
    return ageInYears * .1;
    } else if (weightInPounds > 15 && ageInYears >= .05 <= .07) {
    return ageInYears * .05;
    } else if (weightInPounds > 15 && ageInYears >= .08 <= .09) {
    return ageInYears * .04;
}

console.log(dogFeeder(12,.07));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
// create a random number to my computer beween 1 - 3
// math.random math.floor
// I choose rock, paper or scissors.
// if 1 computer will be rock
// if 2 computer will be paper
// if 3 computer will be scissors
// if computer choses rock, I choose
// Math.random()
// // inside function. 1 param
// var rock = 1
// var paper = 2
// var scissors = 3

 function RockPaperScissors(input) {
   let random = Math.floor(Math.random() * 3) + 1;
   let compChoice;
   let lowercaseInput = input.toLowerCase();

   if (random === 1)  {
     compChoice = "rock";
   }  else if (random === 2)  {
     compChoice = "paper";
   }  else if (random === 3)  {
     compChoice = "scissors";
   }

   console.log(RockPaperScissors(1));








/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function toMiles(kilometer) {
  return (kilometer / 1.609344);
}

console.log(toMiles(5));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function toCentimeters(feet) {
  return (feet * 30.48);
}

console.log(toCentimeters(3));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
 function annoyingSong (numberLeftOver)  {
   for(let i = 100; i < annoyingSong.length; i-- ) {
     if (annoyingSong[i] < 100) {
       return ("[i]bottles of beer on the wall,[i]bottles of beer. Take one down, pass it around,[i]bottles of beer on the wall!");
     }
   }
}

console.log(annoyingSong(99));



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalculator(grade) {
  if (grade < 60) {
    return("Your grade is an F!");
  } else if (grade >= 60 <= 69) {
    return("Your grade is a D.");
  } else if (grade >= 70 <= 79) {
    return("Your grade is a C.");
  } else if (grade >= 80 <= 89) {
  return("Your grade is a B.");
  } else if (grade >= 90 <= 100) {
    return("Your grade is an A!");
  }
}

console.log(gradeCalculator(76));




/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

function countVowels (string) {
  let count = 0;
  let splitString = string.toLowerCase().split("");

  splitString.forEach(v => {if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
    count++;
  }});
  return count;
 }

console.log(countVowels("I LOVE LaMBda"));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
// update your rock papers sissors code below to take a prompt from a user using the window object
