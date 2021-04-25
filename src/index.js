import menuItemsTpl from './templates/menu-items-info.hbs';
import menuItemsInfo from './menu.json';
import './css/styles.css';

// Шаблонизация
const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItemsMarkup(menuItemsInfo);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItemsMarkup(menuItemsInfo) {
    return menuItemsTpl(menuItemsInfo);
}

// Тема
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const themeCheckbox = document.querySelector('#theme-switch-toggle');
themeCheckbox.addEventListener('change', onCheckboxStatusChange);
const body = document.querySelector('body');

body.classList = localStorage.getItem('theme');
if (localStorage.getItem('theme') === 'dark-theme'){ 
    themeCheckbox.checked = true; 
}

function onCheckboxStatusChange() {
    if (themeCheckbox.checked === true) {
        
        if (body.classList.contains(Theme.LIGHT)){
            body.classList.remove(Theme.LIGHT);
        }
        body.classList.add(Theme.DARK);
        themeCheckbox.setAttribute('checked', true);
        localStorage.setItem('theme', body.classList);
    }
        
    else {
        if (body.classList.contains(Theme.DARK)){
            body.classList.remove(Theme.DARK);
        }
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', body.classList);
    } 
}