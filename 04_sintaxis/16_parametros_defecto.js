function mostrarMensaje(nombre, texto = "no hay texto") {
    alert(nombre + ": " + texto);
}

mostrarMensaje("Aitor", "un texto cualquiera");
// Aitor: un texto cualquiera
mostrarMensaje("Aitor");
// Aitor: no hay texto
