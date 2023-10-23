// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
let array = arrays.reduce((flat, current) => flat.concat(current), []);
console.log(array);

// Your Own Loop
function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }
  loop(3, n => n > 0, n => n - 1, console.log);







// Everything 
function everything(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) {
            return false;
        }    
    }
    return true;
}

  console.log(everything([1, 3, 5], n => n < 10));
  console.log(everything([2, 4, 16], n => n < 10));
  console.log(everything([], n => n < 10));



  





  function everything(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  console.log(everything([1, 3, 5], n => n < 10));
  console.log(everything([2, 4, 16], n => n < 10));
  console.log(everything([], n => n < 10));