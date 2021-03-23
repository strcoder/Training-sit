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

// /**
//  * Function to sum values in an array with Array.prototype.reduce()
//  * @param {ARRAY} arr
//  * @returns {NUMBER} sum values in an array
// */
// const sum = (arr) => {
//   return arr.reduce((a, b) => a + b); // Function to reduce the array to a single value
// }

// console.log(sum([1,10])); //output 11
// console.log(sum([10,30])); //output 40
// console.log(sum([1,2,3,4,5])); //output 15
// console.log(sum([1,2,3])); //output 6

//////////////////////////////////////////////////////////////////////

// /**
//  * Function to determine century by the year entered
//  * @param {NUMBER} year
//  * @returns {NUMBER} century
// */
// const centuryFromYear = (year) => {
//   const century = Math.floor((year - 1) / 100) + 1
//   console.log(century);
//   return century;
// }

// centuryFromYear(1901); //ouput 20
// centuryFromYear(2325); //ouput 24
// centuryFromYear(2001); //ouput 21
// centuryFromYear(9); //ouput 1

//////////////////////////////////////////////////////////////////////

// Esta es una funcion que regresa el residuo de determinado numero con su determinado divisor
// Aqui se aplica el concepto de currying ya que se son dos funciones que reciben un solo argumento en vez
// de una sola funcion que reciba dos argumentos
let divisible = mod => num => num % mod;

// Aqui se muestra la manera de llamar dicha funcion
console.log(divisible(5)(44));