ReversibleList = require('./../reversibleList')

function testIsOdd() {
	var reversibleList = new ReversibleList()
	if (false === reversibleList.isOdd(13579)) console.log('testIsOdd failed')
	if (true === reversibleList.isOdd(13879)) console.log('testIsOdd failed')
}

function testReverseNumber() {
	var reversibleList = new ReversibleList()
	if ( 568 !== reversibleList.reverseNumber(865)) console.log('testReverseNumber failed')
	if ( 63 !== reversibleList.reverseNumber(36)) console.log('testReverseNumber failed')
	if ( 1 !== reversibleList.reverseNumber(10)) console.log('testReverseNumber failed')
	if ( 21 !== reversibleList.reverseNumber(1200)) console.log('testReverseNumber failed')
}

function testListReversible(){
	var reversibleList = new ReversibleList()
	if ( 0 !== reversibleList.listReversible(10).length) console.log('testListReversible failed')
	if ( 4 !== reversibleList.listReversible(20).length) console.log('testListReversible failed')
	if ( 120 !== reversibleList.listReversible(1000).length) console.log('testListReversible failed')
}

function testIsReversible() {
	var reversibleList = new ReversibleList()
	if ( false !== reversibleList.isReversible(10)) console.log('testIsReversible failed')
	if ( true !== reversibleList.isReversible(627)) console.log('testIsReversible failed')
}

testIsOdd()
testReverseNumber()
testListReversible()
testIsReversible()