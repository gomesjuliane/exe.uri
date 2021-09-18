var exe1003 = require ('fs').readFileSync('exe1003/stdin', 'utf8');

let coluna = exe1003.split('\n');

let A = parseInt(coluna.shift());
let B = parseInt(coluna.shift());

var SOMA = A + B;

console.log('SOMA = ' + SOMA);