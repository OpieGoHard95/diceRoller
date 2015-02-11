// Coded by Jared Smith
// Started Feb 9 ended Feb 11
// Dice Rolling problem that was assigned in class

var sides = [1, 2, 3, 4, 5, 6]
// Defines the different sides of the dice




var rollDice = sides[Math.floor(Math.random() * sides.length)];
// Assigns a random number to the dice





console.log(rollDice);
// Prints out the assigned number, simulating a dice roll
