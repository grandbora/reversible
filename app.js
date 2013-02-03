ReversibleList = require("./reversibleList")

var givenNumber = 1000 // read from wherever

var reversibleList = new ReversibleList()
var resultArray = reversibleList.listReversible(givenNumber)

console.log(resultArray)
console.log(resultArray.length)