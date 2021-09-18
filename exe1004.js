var exe1004 = require ('fs').readFileSync('exe1004/stdin', 'utf8');

let coluna = exe1004.split('\n');


let A = parseInt(coluna.shift());
let B = parseInt(coluna.shift());

var PROD = A * B;

console.log('PROD = ' + PROD);