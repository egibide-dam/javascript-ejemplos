/* Diferencia let y var */

let x = 10;
let y = 4;
if (x > y) {
    let suma = x + y;
    var resta = x - y;
}

console.log(suma); // undefined
console.log(resta); // 6
