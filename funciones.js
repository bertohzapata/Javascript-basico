/* Declarativas (function declaration / function statement)
 y Expresiones de función (function expression / funciones anónimas).
 */

// Declarativas

function miFuncion() {
    return 3;
}

console.log(miFuncion());;


// Expresion o anónimas
var miFunction = function (a,b) {
    return a+b
}

console.log(miFunction(1,7));