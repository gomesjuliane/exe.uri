var exe1002 = require ('fs').readFileSync('exe1002/stdin', 'utf8');

let coluna = exe1002.split('\n');

const p = 3.14159;
let R = parseFloat(coluna.shift());


let  A = p * Math.pow(R,2);


console.log('A =' + A.toFixed(4));
//console.log(`A = ${A.toFixed(4)}`);

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const p = 3.14159;
let R = parseFloat(lines.shift());


let  A = p * Math.pow(R,2);


console.log('A=' + A.toFixed(4));
*/