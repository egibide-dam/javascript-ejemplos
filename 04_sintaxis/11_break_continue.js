// BREAK
let suma = 0;

while (true) {
    suma += 2
    if (suma > 10) break;
}
console.log(suma); // 12

suma = 0;

for (let i = 0; i < 20; i++) {
    suma += 2
    if (suma > 10) break;
}

console.log(suma); // 12

// CONTINUE
let suma = 0;

while (suma < 10) {
    suma += 1
    if (suma == 5) continue;
    alert(suma)
}

for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    alert(i)
}
