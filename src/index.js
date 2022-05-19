import './style.css';
import displayHome from './modules/displayHome.js';
import pokemonCounter from './modules/pokemonCounter';

const component = () => {
  displayHome();
  setTimeout(() => {
    const pokemonCount = document.querySelectorAll('.gridDiv').length
    const element = document.getElementById('nav-li2');
    pokemonCounter(pokemonCount, element);
  }, 500);
};

document.body.appendChild(component());