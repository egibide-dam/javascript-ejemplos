let content = document.getElementById('content');
content.innerHTML = '<h1>Modificar elementos del DOM</h1>';

let title = document.createElement('p');
title.textContent = "Añadiendo un elemento nuevo";
content.append(title);

let subtitle = document.createElement('h2');
subtitle.textContent = "Modificando el DOM";
title.before(subtitle);

document.body.insertAdjacentHTML('afterbegin', '<small>' + new Date() + '</small>');
