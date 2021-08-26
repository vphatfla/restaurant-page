import mapsrc from './image/map.png';
function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const name = document.createElement('h3');
    name.innerHTML = 'BEAR AND BEER';

    const tele = document.createElement('a');
    tele.innerHTML = '195 735 4268';
    tele.setAttribute('href', 'tel:195-735-4267');

    const address = document.createElement('a');
    address.innerHTML = '5555 Boomers Town Fort Myers, Fucking Hot Florida, Do not know how to drive 33901';
    address.setAttribute('href', 'https://www.google.com/maps/@26.6187703,-81.9023379,12z');

    const map = document.createElement('img');
    map.src = mapsrc;

    contact.append(name, tele, address, map);

    return contact;
}

export default function loadContact(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.appendChild(createContact());
}