let fecha = document.getElementById("fecha");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;   // ¿completado?
    if (xhr.status === 200) {
        fecha.textContent = xhr.responseText;
    } else {
        console.log('HTTP error', xhr.status, xhr.statusText);
    }
};

xhr.open('GET', 'https://time.jaureguialzo.com', true);
xhr.send();
