var ReversibleList = module.exports = function() {}

/**
* Returns the reversible numbers up to upperLimit
* @param {Number} upperLimit
* @return {Array}
*/
ReversibleList.prototype.listReversible = function(upperLimit) {
	var reversibleNumbers = []

	for (var i = 0; i < upperLimit; i++) {
		if (true !== this.isReversible(i)) continue;

		reversibleNumbers.push(i)
	}

	return reversibleNumbers
};

/**
* Returns the reverse of the given number
* @param {Number} number
* @return {Number}
*/
ReversibleList.prototype.reverseNumber = function(number) {
	var numberString = number.toString()
	var reverseString = numberString.split('').reverse().join('')
	return Number(reverseString)
};

/**
* task describes the function as below;
* isOdd(number) - Returns true if number is odd
* I believe what is meant here is to check if all the digits are odd or not.
*
* Returns boolean indicating if the given number is odd or not
* @param {number} number
* @return {boolean} 
*/
ReversibleList.prototype.isOdd = function(number) {
	var numberStringList = number.toString().split('')
	for (var i = 0; i < numberStringList.length; i++) {
		if (0 === numberStringList[i] % 2) return false
	}
	return true
}

/**
* Returns boolean indicating if the given number is reversible or not
* @param {number} number
* @return {boolean} 
*/
ReversibleList.prototype.isReversible = function(number) {
	if (0 === number % 10) return false

	var reverseNumber = this.reverseNumber(number)
	return this.isOdd(number + reverseNumber)
}