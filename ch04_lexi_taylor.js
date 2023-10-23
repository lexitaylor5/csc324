//The Sum of a Range
function range(start, end, step = start <= end ? 1 : -1) {
    let array = [];
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
      array.push(i);
    }
    return array;
  }
  function sum(array) {
    let result = 0;
    for (let value of array) {
      result += value;
    }
    return result;
  }
  
  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));

//Reversing an Array
//https://www.freecodecamp.org/news/how-to-reverse-an-array-in-javascript-js-reverse-function/ website I used for reversing array//
function reverseArray(array) {
    return [...array].reverse();
  }
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);