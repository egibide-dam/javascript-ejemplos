fetch('http://localhost:3000/users', {
    method: 'POST', headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({
        name: 'Ane Oiarzabal'
    })
})
    .then(response => response.json())
    .then(json => console.log(json));
