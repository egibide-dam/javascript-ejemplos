let titleElement = document.getElementById('title');
console.log(titleElement);

// Select Saruman by Id
let saruman = document.getElementById('saruman');
console.log(saruman.textContent);

// Select all <ul> elements
let ulList = document.getElementsByTagName('ul');
console.log('Number of <UL>: ' + ulList.length);

// Select .characters with document.querySelector (get the first item)
let characters = document.querySelectorAll('.characters')[0];
console.log(characters);

// Select .humans from .characters
let humans = characters.getElementsByClassName('humans');
console.log(humans);

// Select all humans with querySelectorAll
humans = characters.querySelectorAll('.humans');
console.log(humans);

// Select all hobbits with children
let hobbits = characters.children[0];
console.log(hobbits);

// Select the Merry (the hobbit)
let merry = hobbits.children[2];
console.log(merry.textContent);

// Select the Pippin from Merry
let pippin = merry.nextElementSibling;
console.log(pippin.textContent);
