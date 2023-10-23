const fs = require("fs"); 
const path = require("path");
let targetFile = path.resolve(process.cwd(), "./adventcode_01/input.txt");
let input = fs.readFileSync(targetFile);
console.log(input);