function saludar(event) {

    //Detener el comportamiento por defecto
    event.preventDefault();

    // En función del tipo de evento, elegir la operación.
    if (event.type === 'click') {
        console.log("Evento: " + event.type + " en " + event.currentTarget.textContent);
    } else if (event.type === 'mouseover') {
        console.log("Evento: mouseover");
    } else {
        console.log("Otro evento");
    }
}

// Añadir eventos
let h2 = document.getElementById('subtitulo');
h2.addEventListener('mouseover', saludar);

let google = document.getElementById('google');
google.addEventListener('click', saludar);

let buscador = document.getElementById('buscador');
buscador.addEventListener('keypress', function (event) {
    console.log(event.target.value);
});
