var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,string){
  var sweets = [...array, string]
console.log(sweets)
  return sweets
}

function destructivelyAddElementToBeginningOfArray(array,string){
  var list=array
  var add=string

  list.unshift(add)
  return list
}

destructivelyAddElementToBeginningOfArray(chocolateBars,'crunch')

addElementToBeginningOfArray(chocolateBars, 'milky way')

function destructivelyAddElementToEndOfArray(array,string){
return array.push(string)
}

destructivelyAddElementToEndOfArray(chocolateBars,'crunch')

function addElementToEndOfArray(array,string){
  var sweets = [...array, string]
  console.log(sweets)
  return sweets
}

addElementToEndOfArray(chocolateBars, 'twizzler')



// TODO: Define a function in arrays.js called accessElementInArray.
// The function should accept an array and an index and return the element at that index.
