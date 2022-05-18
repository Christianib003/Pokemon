import Like from '../images/heart.png';
import fetchPokemon from './fetchPokemon.js';
import Image1 from '../images/pikachu.jpeg';
import Image2 from '../images/blackpikachu.jpg';
import Image3 from '../images/dinasaur.jpg';
import Image4 from '../images/jigglypuff.jpg';
import Image5 from '../images/teddybear.jpg';
import Image6 from '../images/teddybear2.jpg';
import addLike from './addLike.js';
import fetchLikes from './fetchLikes.js';

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
        like.addEventListener('click', () => {
          addLike(pokemonName.innerText);
          
        });

        const likeCount = document.createElement('p');
        fetchLikes()
          .then((response) => {
            const pokemonObject = (response.find((o) => o.item_id === pokemonName.innerText));
            likeCount.innerText = `${pokemonObject.likes} likes`;
          });
        likeCount.classList.add('likeCount');

        infoDiv.appendChild(pokemonName);
        infoDiv.appendChild(like);

        const commentButton = document.createElement('button');
        commentButton.classList.add('commentButton');
        commentButton.innerText = 'Comment';

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