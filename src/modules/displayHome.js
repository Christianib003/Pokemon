import Like from '../images/heart.png';
import fetchPokemon from './fetchPokemon.js';
import Image1 from '../images/pikachu.jpeg';
import Image2 from '../images/blackpikachu.jpg';
import Image3 from '../images/dinasaur.jpg';
import Image4 from '../images/jigglypuff.jpg';
import Image5 from '../images/teddybear.jpg';
import Image6 from '../images/teddybear2.jpg';

const pokemonImages = [Image1, Image2, Image3, Image4, Image5, Image6];
let loop = 0 - 1;

const displayHome = () => {
  const mainBody = document.createElement('div');
  mainBody.classList.add('mainBody');

  fetchPokemon()
    .then((response) => {
      response.forEach((pokemon) => {
        // eslint-disable-next-line no-plusplus
        loop++;
        const gridDiv1 = document.createElement('div');
        gridDiv1.classList.add('gridDiv');

        const image = document.createElement('img');
        image.src = pokemonImages[loop];
        image.classList.add('pokemonImage');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('infoDiv');

        const pokemonName = document.createElement('p');
        pokemonName.innerText = pokemon.name;
        pokemonName.classList.add('pokemonName');

        const like = document.createElement('img');
        like.src = Like;
        like.classList.add('like');

        const likeCount = document.createElement('p');
        likeCount.innerText = '5 Likes';
        likeCount.classList.add('likeCount');

        infoDiv.appendChild(pokemonName);
        infoDiv.appendChild(like);

        const commentButton = document.createElement('button');
        commentButton.classList.add('commentButton');
        commentButton.innerText = 'Comment';

        commentButton.addEventListener('click', () => {
          const popUp = document.createElement('div');
          popUp.classList.add('pop-up');
          popUp.innerHTML = `
          <span class="closee" id="close"><p class="close-popUp">&times;</p></span>
          <div class="image-holder">
              <img src="${commentButton.previousElementSibling.previousElementSibling.previousElementSibling.src}" alt="" class="popUp-image">
          </div>
          <h2 class="popUp-title">${pokemon.name}</h2>
          <div class="properties-holder">
              <div class="properties properties-left">
                  <p class="property property-one">Fuel: 2000</p>
                  <p class="property property-two">Weight: 2000</p>
              </div>
              <div class="properties properties-right">
                  <p class="property property-one">Lenght: 2000</p>
                  <p class="property property-two">Power: 2000</p>
              </div>
          </div>
          <h3 class="comment-title">Comments(10)</h3>
          <div class="comments-holder">
              <p class="comment comment-one">Helelele</p>
              <p class="comment comment-one">Helelele</p>
          </div>
          <h3 class="addComment-title">Add comment</h3>
          <form class="addComment-form" id="comment-form">
              <input type="text" class="name" id="name" placeholder="Your Name" required>
              <textarea id="message" cols="30" rows="5" class="message" placeholder="Your insights" required></textarea>
              <button type="button" id="add-comment" class="add-comment">Add comment</button>
          </form>
          `;
          document.body.appendChild(popUp);
          popUp.style.display = 'block';

          document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-popUp')) {
              const popUp = document.querySelector('.pop-up');
              popUp.style.display = 'none';
              window.location.reload();
            }
          });
        });

        const reservationButton = document.createElement('button');
        reservationButton.classList.add('reservationButton');
        reservationButton.innerText = 'Reservation';

        gridDiv1.appendChild(image);
        gridDiv1.appendChild(infoDiv);
        gridDiv1.appendChild(likeCount);
        gridDiv1.appendChild(commentButton);
        gridDiv1.appendChild(reservationButton);

        mainBody.appendChild(gridDiv1);
        document.body.appendChild(mainBody);
      });
    });
};

export default displayHome;