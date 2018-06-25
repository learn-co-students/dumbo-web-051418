// tells our file to wait until the page is loaded and then run the function below
document.addEventListener('DOMContentLoaded', function() {
  console.log('yeah boiiii')
})

// Data Types
// number
//   NAN
//   0 is falsey
// string
//   empty string is falsey
// boolean
// null is falsey
//   doesn't exist, nothing
// undefined  is falsey
//    declared but not value assigned
// symbol
// objects
//   array
       !![].length // to check for value
//   objects pojos
       !!Object.keys({}).length // to check for value
//   promise
//   functions
//   dot notation, bracket notation


// Variable Assignment and Hoisting
// let and const don't allow us to use a variable until it is declared
// var will hoist a variable declaration to the top of a file but not the definition
//   this means using a var before it is declared will result in an undefined value

console.log(banana) // undefined
var banana = 'a yellow fruit'
console.log(banana) // 'a yellow fruit'

console.log(orange) // error
let orange ='an orange fruit'
console.log(orange) // 'an orange fruit'

// Scope
// functions have knowledge of variables defined in the same scope they are defined in

function hideYourVars(){
  const apple = 'a type of fruit'
  evenMoreSecret() // error, apple defined in a different scope
  function innerFunc() {
    const pear = 'not an avocado'
  }
  innerFunc()
  console.log(pear) // error, pear defined in a different scope
}

function evenMoreSecret() {
  console.log('secret', apple)
}

hideYourVars()


// Functions are weird
// console.logs either the date or time based on the argument passed to it
function printDateTime2(whatToPrint) {
  const date = new Date()
  if (whatToPrint === 'date'){
    console.log(date.toDateString())
  } else if (whatToPrint === 'time') {
    console.log(date.toTimeString())
  }
}

function showDate() {
  const date = new Date()
  return date.toDateString()
}

function showTime() {
  const date = new Date()
  return date.toTimeString()
}

// takes a callback function which returns the date or time to be assigned
function printDateTime(callback) {
  console.log(callback())
}

printDateTime(showDate)
printDateTime(showTime)
