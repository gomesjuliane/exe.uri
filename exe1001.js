var exe1001 = require ('fs').readFileSync('exe1001/stdin', 'utf8');

let coluna = exe1001.split('\n');

var A = parseInt(coluna.shift());
var B = parseInt(coluna.shift());
var X = A + B ;
console.log(`X = ${X}`)


