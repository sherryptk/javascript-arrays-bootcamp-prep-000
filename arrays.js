var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element){
  var sweets 
  sweets=[element,...array]
  return sweets
}

function destructivelyAddElementToBeginningOfArray(array,string){
  array.unshift(string)
  return array
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
