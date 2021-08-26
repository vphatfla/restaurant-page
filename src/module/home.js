import beer from './image/beer.jpg';

function createHome(){
    const home = document.createElement('div');
    
    let intro  = createParagraph('Welcome to beer bear restaurant'), 
    main_content = createParagraph('No fun, no full? Return everything.');

    let img = document.createElement('img');
    img.src = beer;

    home.appendChild(intro);
    home.appendChild(img);
    home.appendChild(main_content); 

    home.classList.add('home');
    return home;
}
export function createParagraph(para){
    const str = document.createElement('p');
    str.innerHTML = para;
    return str;
}
export default function loadHome(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.appendChild(createHome());
}