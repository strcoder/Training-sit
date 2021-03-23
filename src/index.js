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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Esta es una funcion que regresa el residuo de determinado numero con su determinado divisor
// // Aqui se aplica el concepto de currying ya que se son dos funciones que reciben un solo argumento en vez
// // de una sola funcion que reciba dos argumentos
// let divisible = mod => num => num % mod;

// // Aqui se muestra la manera de llamar dicha funcion
// console.log(divisible(5)(44));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // ¿Qué pasa con este código?, ¿Qué imprime la consola?, ¿error? ¿100? ¿undefined?  /
// // En esta codigo se declara una funcion la cual retorna la variable a, dicha variable es declarada
// // consecuentemente a la funcion con un valor de 10 y al final se hace el llamado de la funcion para imprimir el valor de a
// // En este caso como la variable se declara antes de que la funcion sea ejecutada, la variable se en el entorno de ejecucion
// // y puede se accedida por la funcion en el caso de que la variable fuera declarada despues del llamado de la funcion
// // al momento de ejecutar daria un error
// function foo() {
//   return a;
// }

// let a = 100;

// console.log(foo()); // output 100
// // let a = 100; // Declarandola despues de llamar a la funcion daria error

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /**
//  * Function to validate if the value is palindrome
//  * @param {STRING} value
//  * @returns {BOOLEAN} if value is palindrome return true
// */
// const isPalindrome = (value) => {
//   const aux = value.replace(/ /g, '').toLowerCase(); // Delete spaces and transform to lower case
//   // (split) Transform to array,
//   // (reverse) Invert the array,
//   // (join) Transform to string,
//   // (replace) Delete spaces,
//   // (toLowerCase) Transform to lower case,
//   const backward = value.split('').reverse().join('').replace(/ /g, '').toLowerCase();

//   if (aux === backward) {
//     return true
//   }
//   return false
// }

// console.log(isPalindrome('oro')); // output = true;
// console.log(isPalindrome('reconocer')); // output = true;
// console.log(isPalindrome('sometamos')); // output = false;
// console.log(isPalindrome('animal')); // output = false;
// console.log(isPalindrome('animal a lamina')); // output = true;
// console.log(isPalindrome('1234567890987654321')); // output = true;
// // segunda parte
// console.log('--------------------------------------------');
// console.log(isPalindrome('Al reparto sacas otra perla')); // output = true;
// console.log(isPalindrome('Allí vez Sevilla')); // output = false;
// console.log(isPalindrome('Asi revelara su amada dama usar aleve risa')); // output = true;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * La funcion reliza un filtrado de los objetos dentro de la colleccion de acuerdo a la variable edad que recibe
 * y si la edad dentro del objeto es mayor o igual que la edad entonces se guardara para ser retornada en una nueva lista
 * Para que la funcion ralice la operacion necesitara una array de objetos los cueles tengan un atributo de edad
 * @param {ARRAY} coleccion
 * @param {NUMBER} edad
 * @returns {ARRAY}
 */
function filtraPorEdad(coleccion, edad) {
  return coleccion.filter(item => {
    return item.edad >= edad;
  });
}

const collection = [
  {
    edad: 10,
    nombre: 'pepito',
  },
  {
    edad: 12,
    nombre: 'susana',
  },
  {
    edad: 21,
    nombre: 'jose',
  },
  {
    edad: 20,
    nombre: 'sofia',
  },
];

console.log(filtraPorEdad(collection, 18));