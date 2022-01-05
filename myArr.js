import { mySum } from './mySum.js'
// Create an array of numbers named “myArr”. Your array may have any length (try different lengths to test it). 
const myArr = [9,8,7,6,5]

// Call your function passing as arguments the members of myArr array using the SPREAD operator. Assign the result to a “result” variable and console log it.
const result = mySum(...myArr)
console.log(result)

// Create a new array named “mySecondArr”. Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.
const mySecondArr = myArr.map(elm => elm * 2)

// Filter the contents of your mySecondArr using an anonymous function that console logs the numbers above average number (you’ll need to find the average firs
const average = mySecondArr.reduce((acc,cur) => {
  return acc+cur
})/mySecondArr.length
const aboveAverage = mySecondArr.filter(a =>  {if(a > average) return a} )
console.log(aboveAverage)

// Use setTimeout() function. Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
const goodbye = () => {
  console.log('Goodbye')
}
setTimeout(goodbye,3000)

// Create an “Employee” object that has the following key-value pairs: “name”, “email”, “department” and “startDate”.  

const Employee = {
  name : "",
  email: "",
  department: "",
  startDate : ""
}

// Destructure your object to create a new object, called “Person”, that only has name and email keys (and the corresponding values).
const { name, email } = Person