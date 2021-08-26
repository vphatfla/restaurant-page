import loadHome from './module/home';
import loadMenu from './module/menu';
import loadNavBar from './module/header';
import loadContact from './module/contact';
import loadFooter from './module/footer';
import './style.css';

loadNavBar();
loadHome();
loadFooter();
const runNavBar = (function(){
    const navBar = document.querySelector('.nav-bar');
    const btns = navBar.querySelectorAll('a');
    
    const removeActive = function(nameButton){
        const navArray = Array.prototype.slice.call(btns);
        for (let i = 0; i<navArray.length; i++){
            if (navArray[i].innerHTML != nameButton){
                navArray[i].classList.remove('active');
            }
            else navArray[i].classList.add('active');
        }
    }

    btns.forEach(btn => btn.addEventListener('click', function(){
        switch (btn.innerHTML){
            case 'HOME':
                loadHome();
                removeActive('HOME');
                break;
            case 'MENU':
                loadMenu();
                removeActive('MENU');
                break;
            case 'CONTACT':
                loadContact();
                removeActive('CONTACT');
                break;
        }

    }))
})();

