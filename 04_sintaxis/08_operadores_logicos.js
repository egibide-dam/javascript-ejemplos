// NOT
alert(!true); // false
alert(!0); // true

// OR
let hora = 9;

if (hora < 10 || hora > 18) {
    alert('La tienda está cerrada.');
}

hora = 12;
let esDomingo = true;

if (hora < 10 || hora > 18 || esDomingo) {
    alert('La tienda está cerrada.'); // es domigo
}

// AND
let nombre = 'Amaia', edad = 30, profesor = true;

if (nombre == 'Amaia' && edad == 30) {
    alert('Se llama Amaia y tiene 30 años');
}
