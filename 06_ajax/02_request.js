let fecha = document.getElementById("fecha");

function reqListener() {
    fecha.textContent = this.responseText;
}

function reqError() {
    console.log('ERROR: No se ha podido cargar el recurso...');
}

let xhr = new XMLHttpRequest();

xhr.addEventListener("load", reqListener);
xhr.addEventListener("error", reqError);

xhr.open('GET', 'https://time.jaureguialzo.com', true);
xhr.send();
