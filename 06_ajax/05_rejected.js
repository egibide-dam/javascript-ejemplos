fetch('https:://invalid_url')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.statusCode);
            return Promise.reject('Error en la respuesta del servidor');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error detectado: ', error));
