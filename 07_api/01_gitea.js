// Evitar errores de certificado SSL (solo para entornos de desarrollo)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Crear un nuevo usuario en Gitea mediante la API
fetch('https://gitea.test/api/v1/admin/users', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer e29af953a53ccdc34443f8ef667420b16e0775ff',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            "email": "prueba2@example.com",
            "password": "12345Abcde",
            "username": "prueba2"
        }
    )
})
    .then(response => response.json())
    .then(json => console.log(json));
