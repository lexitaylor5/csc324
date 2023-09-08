// Lexi Taylor
// Chapter 3

// Minimum
function min(a,b) {
    if (a < b) return a;
    else return b;
}
console.log(Math.min(0, 10));
console.log(Math.min(0, -10));

// Recursion
function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else if (number < 0) return isEven(-number);
    else return isEven(number - 2);
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting
function countBs(string) {
    return countChar(string, "B");
}
function countChar(string, char) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] == char) {
            counted ++;
        }
    }
    return counted;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


