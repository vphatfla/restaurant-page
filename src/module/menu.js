import honey from './image/honey.png';
import salmon from './image/salmon.png';
import vodka from './image/vodka.png';
import rootBeer from './image/root-beer.png';
function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const food1 = createFood('HONEY', honey, 'sweet'),
    food2 = createFood('SALMON', salmon, 'protein'),
    food3 = createFood('VODKA', vodka, 'high'),
    food4 = createFood('ROOT BEER', rootBeer, 'chilling');

    menu.append(food1, food2, food3, food4);
    
    return menu;
}

function createFood(name, img, para){
    const food = document.createElement('div');
    food.classList.add('food');
    const n = document.createElement('h4');
    n.innerHTML = name;

    const im = document.createElement('img');
    im.src = img;

    const p = document.createElement('p');
    p.innerHTML = para;

    food.append(n, im, p);

    return food;
}

export default function loadMenu(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.appendChild(createMenu());
}
