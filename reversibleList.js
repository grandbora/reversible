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
* Returns boolean indicating if all the digits of the given number is odd or not
* @param {number} number
* @return {boolean} 
*/
ReversibleList.prototype.areAllDigitsOdd = function(number) {
	var numberStringList = number.toString().split('')
	for (var i = 0; i < numberStringList.length; i++) {
		if (false === this.isOdd(numberStringList[i])) return false
	}
	return true
}

/**
* Returns boolean indicating if the given number is odd or not
* @param {number} number
* @return {boolean} 
*/
ReversibleList.prototype.isOdd = function(number) {
	return 1 === number % 2
}

/**
* Returns boolean indicating if the given number is reversible or not
* @param {number} number
* @return {boolean} 
*/
ReversibleList.prototype.isReversible = function(number) {
	if (0 === number % 10) return false

	var reverseNumber = this.reverseNumber(number)
	return this.areAllDigitsOdd(number + reverseNumber)
}