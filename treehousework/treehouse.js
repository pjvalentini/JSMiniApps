//Story Maker - Use storymaker.html file//

// "<h2>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</h2>";
//
// var adjective = prompt('Please type an adjective');
// var sentence = "<h2>There once was a " + adjective;
// var verb = prompt('Please type a verb');
// var noun = prompt('Please type a noun');
// alert('All done. Ready for the message?');
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);

//Numbers - Use numbers.html //

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// console.log("There are " + secondsPerDay + " seconds in a day.");
// document.write("There are " + secondsPerDay + " seconds in a day.");
// var yearAlive = 39;
// document.write(" I have been alive for " + 39 * secondsPerDay + " seconds");

//Basic Math to figure out Profit Per Unit - Use numbers.html//

// var wholesalePrice = 5.45;
// var retailPrice = 9.99;
// var quantity = 47;
// var salesTotal = retailPrice * quantity;
// console.log(salesTotal);
// var profit = salesTotal - wholesalePrice * quantity;
// console.log(profit);
// var profitPerUnit = profit / quantity;
// console.log(profitPerUnit);

//Numbers and Strings - Use numbers.html //
//Using parseInt() to convert strings into numbers//

// var homeJerseys = prompt("How many home jerseys do you have?");
// var awayJerseys = prompt("How many away jerseys do you have?");
// var totalJerseys = parseInt(homeJerseys) + parseInt(awayJerseys);
// console.log(totalJerseys);
// alert("Wow you have " + totalJerseys + " jerseys!");

//Mad libs app with numbers - Use numbers.html file//
//Added a countdown from the questions to reflect one less every time a questions is asked.//

// "<h2>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</h2>";
//
// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt('Please type an adjective' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt('Please type a verb' + questionsLeft);
// questions -= 1;
// questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);

//Understanding the math object//
//This code creates a random die roll!

// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert("You rolled a " + dieRoll);

//The Random Challenge//
//
// var secondInput = prompt("Please type a starting number");
// var bottomNumber = parseInt(secondInput);
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * topNumber - bottomNumber + 1) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p> ";
// document.write(message);

//Conditional Statements using JavaScript//
//Comparing items using if/else Statements//

// var answer = prompt("What programming language is the name of a gem?");
// if (answer.toUpperCase() === "RUBY") { //Add .toUpperCase to make sure you get a true regardless of case sen.
// 	document.write("<p>That's Right!</p>");
// } else {
// 	document.write("<p>Sorry, that is not correct.</p>");
// }

//Random Nummber Guessing Game//

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
// 	document.write("<p>You guessed the number.</p>");
// } else {
// 	document.write("<p>Sorry. The Number was " + randomNumber + "</p>");
// }

//Understanding the Boolean value//
//Using a Boolean value in the random guessing game.//

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber) {
// 	correctGuess = true;
// }
// if (correctGuess) { //Testing if the variable is true.
// 		document.write("<p>You guessed the number!</p>");
// } else {
// 		document.write("<p>Sorry, the number was " + randomNumber + ".</p>");
// } //This 2nd Cond Stmnt writes a message if the stmt is true. if not then a Sorry message comes out.

//Another Simple Boolean Example//

// var isAdmin = false;
// var isStudent = true;
//
// if (isAdmin) { //If can be placed here to test isAdmin true.
// 	alert("Welcome Administrator");
// } else if
// 	(isStudent = true)
// 	alert("Welcome Student");

//Improving on the Random Number game by adding hints using else if conditions.
// This games generates a number btwn 1-6 and gives player 2 attempt at solving.

//Assume the player did not guess correctly.
// var correctGuess = false;
//
// //Generates the number btwn 1-6.
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
//
// /*
// 1. Player is correct
// 2. Player guessed to high.
// 3. Player guessed to low.
// */
// if (parseInt(guess) === randomNumber) {
// 	correctGuess = true;}
// 	 else if (parseInt(guess) < randomNumber) {
// 	 var guessMore = prompt("Try again. The number I am thining of is more than " + guess);
// 	}
// 	 if (parseInt(guessMore) === randomNumber) {
// 		 	correctGuess = true;
// 	}
// 	 else if (parseInt(guess) > randomNumber) {
// 		 var guessLess = prompt("Try again. The number I am thinking of is less than " + "guess");
// 		 if (parseInt(guessLess) === randomNumber) {
// 			 correctGuess = true;
// 	 }
// 	}
//
// //Tests if the Player is correct and returns a response...
// 	if (correctGuess) { //Testing if the variable is true.
// 		document.write("<p>You guessed the number!</p>");
// } else {
// 		 document.write("<p>Sorry, the number was " + randomNumber + ".</p>");
// }

// // This is an app for a 5 questions game with fruits.
// var correct = 0;
//
// //Ask Questions using a prompt method.
// var answer1 = prompt("Name a fruit that is yellow and curvy.");
// if (answer1.toUpperCase() === "BANANA") {
// 	 correct += 1;
// }
// var answer2 = prompt("Name a fruit that has the name of another fruit in its name.");
// if (answer2.toUpperCase() === "GRAPEFRUIT") {
// 	 correct += 1;
// }
// var answer3 = prompt("Name a fruit that is its own color.");
// if (answer3.toUpperCase() === "ORANGE") {
// 	 correct += 1;
// }
// var answer4 = prompt("Name a fruit that is very very tart and also yellow and great in tea.");
// if (answer4.toUpperCase() === "LEMON") {
// 	 correct += 1;
// }
// var answer5 = prompt("Name a fruit that keeps the doctor way");
// if (answer5.toUpperCase() === "APPLE") {
// 	 correct += 1;
// }
// //Outputting the reusults.
// document.write("<p>You got " + correct + " out of 5 questions correct.</p>");
//
// //Ranking system.
// if (correct === 5) {
// 		document.write("<p><strong>You Earned a Gold Medal!</strong></p>");
// } else if (correct >= 3){
// 		document.write("<p><strong>You Earned a Silver Medal!</strong></p>");
// } else if (correct >= 1){
// 		document.write("<p><strong>You Earned a Bronze Medal!</strong></p>");
// }	else {
// 		document.write("<p><strong>You are terrible at this game. No Medal!</p>");
// }

//Functions
//Basic Use of a Function. This function will say "hello" as an alert.

// function sayHello() {
// 	alert("Hello");
// }
// sayHello();


//This Fucntion will allert a random number 4 times...

// function alertRandom() {
//   var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   alert(randomNumber);
// }
// alertRandom();
// alertRandom();
// alertRandom();
// alertRandom();

//Using an Anoymous Function.

// var alertRandom = function() {
// 	var randomNumber = Math.floor(Math.random() * 6) + 1;
// 	alert(randomNumber);
// };
// alertRandom();
// alertRandom();
// alertRandom();

//Function returning a value.

// function giveMeFive() {
// 	return 5;
// }
// // prints 5 to the console.
// console.log(giveMeFive());

// //Versalilty of Functions...can be used many ways...
// function getRandomNumber() {
//   var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//   return randomNumber;
// }
// //Create an Alert.
// alert(getRandomNumber());
// //Console log it.
// console.log(getRandomNumber);
// //Create a variable inside a function.
// var dieRoll = getRandomNumber;

/*Testing to see if a field in a submit for is empty. And Generating
a message to determine true or false.*/

// function isEmailEmpty() {
// 	var formField = document.getElementById("email");
// 	if (field.value === '') {
// 		return true;
// 	} else {
// 			return false;
// 	}
// }
// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
// 		alert("Please enter your email address.");
// }

//Working With Objects Globally

// var vehicle = {
//    carOne : {
//     brand: "benz",
//     color: "red",
//     interiorDesign: "leather",
//     numberOfDoors: 4,
//     airBag: "yes"
//   },
//
//    carTwo : {
//     brand: "lexus",
//     color: "blue",
//     interiorDesign: "poop",
//     numberOfDoors: 2,
//     airBag: "nope"
//   }
// };
//
// console.log(vehicle.carOne);
// console.log(vehicle.carTwo.color);
// console.log(vehicle.carOne.interiorDesign);
//
// //Creating a Function with objects Locally...
// function createCar() {
//   var carThree = {
//     brand: "Toyota",
//     color: "orange",
//     interiorDesign: "cotton",
//     numberOfDoors: 4,
//     airBag: "yes"
//   };
//   return carThree;
// }
// createCar();
//
// //Creating a function called BuildCar.
// //Returning the value of the object created inside of the createCar function.
// //To do this this we need to need to creat an anymous function and return the above fuction.
// //Then we need to call the buildCar function which out puts the contents of createCar function.
// function buildCar() {
//   // return createCar ();
//   return vehicle.carTwo;
// }
// buildCar();

var person = {
   firstName: "Seif",
   lastName: "Dorani",


   fullName: function(){
     console.log(this.firstName + "" + this.lastName);
   }
 };

person.fullName();
