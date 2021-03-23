// /**
//  * Function to add two variables
//  * @param {NUMBER} a
//  * @param {NUMBER} b
//  * @returns {NUMBER} a + b
//  */
// const sum = (a, b) => {
//   return a + b;
// }

// console.log(sum(1,10)); //output 11
// console.log(sum(10,30)); //output 40

//////////////////////////////////////////////////////////////////////

/**
 * Function to sum values in an array with Array.prototype.reduce()
 * @param {ARRAY} arr
 * @returns {NUMBER} sum values in an array
 */
 const sum = (arr) => {
  return arr.reduce((a, b) => a + b); // Function to reduce the array to a single value
}

console.log(sum([1,10])); //output 11
console.log(sum([10,30])); //output 40
console.log(sum([1,2,3,4,5])); //output 15
console.log(sum([1,2,3])); //output 6