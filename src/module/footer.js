export default function loadFooter(){
    const footer = document.querySelector('.footer');
    const p =document.createElement('a');
    p.innerHTML = 'Own by Van Phat Phan';
    p.setAttribute('href', 'https://github.com/vphatfla');
    footer.appendChild(p);
}