function createNavBar(){
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    const home = document.createElement('a'),
    menu =  document.createElement('a'), 
    contact = document.createElement('a');

    home.setAttribute('id', 'home');
    home.setAttribute('href', '#');
    home.innerHTML ='HOME';
    home.classList.add('active');

    menu.setAttribute('id', 'menu');
    menu.setAttribute('href', '#');
    menu.innerHTML ='MENU';

    contact.setAttribute('id', 'contact');
    contact.setAttribute('href', '#');
    contact.innerHTML ='CONTACT';

    navBar.append(home, menu, contact);

    return navBar;
}

export default function loadNavBar(){
    const header = document.querySelector('.header');
    const name = document.createElement('h1');
    name.innerHTML = 'BEAR AND BEER';

    header.appendChild(name);
    header.appendChild(createNavBar());
}