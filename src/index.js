import './styles.css';
import menu from './menu.json';
import template from './template.hbs';

const markup = template(menu);
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);

const body = document.querySelector('body');
const switchInput = document.querySelector('.js-switch-input');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeMaker() {
  if (switchInput.checked) {
    //body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }
  body.classList.remove(Theme.DARK);
  //body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}
function pointerPossitioning() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    body.classList.add(Theme.DARK);
    switchInput.checked = true;
  }
}
switchInput.addEventListener('click', themeMaker);
pointerPossitioning();
