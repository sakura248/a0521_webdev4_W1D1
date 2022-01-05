// Create an arrow function named “mySum”. 
// Your function should accept an arbitrary number of arguments using the REST operator.
// Your function should return the sum of all of its inputs.

export const mySum = (...arr) => {
  return arr.reduce((prev,curr)=>{
    return prev + curr
  })
}