// Lexi Taylor 
// Chapter 2

// Looping a Triangle 
let line = "#";
while (line.length <= 7) {
    console.log(line);
    line = line + "#";
}

//Fizz Buzz
for (let number = 1; number <= 100; number++) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
  }

//Chessboard
let size = 8;
let chessboard = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}
console.log(chessboard);