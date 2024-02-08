let estudiantes = ["Amaia", "Markel", "Nora"];

for (let i = 0; i < estudiantes.length; i++) {
    alert(estudiantes[i]);
}

// forEach
estudiantes.forEach(elemento => {
    console.log(elemento)
});

estudiantes.forEach((elemento, indice) => {
    console.log(indice);
    console.log(elemento);
});

// iterar sobre los elementos
for (let estudiante of estudiantes) {
    alert(estudiante);
}
