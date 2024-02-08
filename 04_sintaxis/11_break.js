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
