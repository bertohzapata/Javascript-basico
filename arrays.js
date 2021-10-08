var fruits = ["Manzana","Plátano","Cereza","Fresa",]

console.log(fruits.length);

console.log(fruits[0]);

// Agregar datos al final
fruits.push("Uvas")

// Quitar un elemento al final
var ultimo = fruits.pop("Uvas")

// agregar un elemento al inicio
var nuevaLongitud = fruits.unshift("Uvas")

// Quita un elemento al inicio
var borrarFruta = fruits.shift("Uvas")

// Devuelve el íncide de un elemento  de array
var posicion = fruits.indexOf("Cereza") // 2
