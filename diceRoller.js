// Coded by Jared Smith
// Started Feb 9 ended Feb 11
// Dice Rolling problem that was assigned in class

var sides = [1, 2, 3, 4, 5, 6]
// Defines the different sides of the dice

var rollDice = function() {
	return Math.floor(Math.random(sides) * sides.length);
// Roll a single dice
	}
console.log(rollDice);
