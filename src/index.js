import './styles.css';
import menu from './menu.json';
import template from './template.hbs';

const markup = template(menu);
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);

const body = document.querySelector('body');
const switchInput = document.querySelector('.js-switch-input');

switchInput.addEventListener('change', switchInputChecked);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function switchInputChecked() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.LIGHT) {
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkedTheme() {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', Theme.LIGHT);
  }

  if (theme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    switchInput.checked = true;
  }

  if (theme === Theme.LIGHT) {
    body.classList.add(Theme.LIGHT);
  }
}
checkedTheme();
