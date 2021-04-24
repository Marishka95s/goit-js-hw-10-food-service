import menuItemsTpl from './templates/menu-items-info.hbs';
import menuItemsInfo from './menu.json';
import './css/styles.css';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuItemsMarkup(menuItemsInfo);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItemsMarkup(menuItemsInfo) {
    return menuItemsTpl(menuItemsInfo);
}
