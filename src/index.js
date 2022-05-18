import './style.css';
import displayHome from './modules/displayHome.js';

const component = () => {
  displayHome();
};

document.body.appendChild(component());