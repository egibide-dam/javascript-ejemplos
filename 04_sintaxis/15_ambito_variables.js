let nombreExterior = 'Unai';

function mostrarNombre() {
    let nombreInterior = "Amaia"; // variable local
    alert(nombreInterior);
    alert(nombreExterior); // Puede acceder
}

mostrarNombre();
alert(nombreInterior); // Error! Es variable local
