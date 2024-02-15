// Crear objetos
let profesor = new Object();

let becario = {};

let estudiante = {
    edad: 35,
    nombre: "Aitor",
};

// Acceder a las propiedades de un objeto
let persona = {
    nombre: "Aitor",
    edad: 35,
    isEstudiante: true,
};

console.log(persona.nombre); // Aitor

console.log(persona["edad"]); // 35

// Añadir y eliminar propiedades
let empleado = {
    nombre: "Aitor",
    edad: 35,
    isIndefinido: true
};

persona.email = "aitor@mail.com";

delete persona.edad;

console.log(persona);

// Comprobar que una propiedad existe
let personaje = {nombre: "Marc", edad: 23};

console.log("nombre" in persona); // true
console.log("apellido" in persona); // false

// Iterar por las propiedades de un objeto
let libro = {
    titulo: "Dune",
    autor: "Frank Herbert",
    publicado: 1965,
};

for (let clave in libro) {
    console.log(clave);
    console.log(libro[clave]);
}

// Métodos en objetos
let amigo = {
    nombre: "Kepa",
    edad: 30,
    saludar: function () {
        console.log("Hola");
    }
};

amigo.saludar(); // Hola

let conocido = {
    nombre: "Iñaki",
    edad: 31,
    saludar() {
        console.log("¿Qué tal?");
    }
};

conocido.saludar(); // ¿Qué tal?

// Referencia this
let visitante = {
    nombre: "María",
    id: "A123",
    saludar() {
        console.log("Hola " + this.nombre);
    }
};

visitante.saludar(); // Hola María

// Clases
class Persona {
    edad = 20;

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log("Hola " + this.nombre);
    }
}

let amiga = new Persona("Amaia");
amiga.saludar(); // Hola Amaia
