var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element){
  var sweets=[element,...array]
  return sweets
}

function destructivelyAddElementToBeginningOfArray(array,string){
  array.unshift(string)
  return array
}

function destructivelyAddElementToEndOfArray(array,string){
  array.push(string)
  return array
}

function addElementToEndOfArray(array,string){
  var sweets = [...array, string]
  console.log(sweets)
  return sweets
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  //array.slice(1)
  return array.slice(1)
}
