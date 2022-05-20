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
import { postComment, allComments } from './comments.js';
import commentCounter from './commentCounter.js';

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

        const likeCount = document.createElement('p');
        fetchLikes()
          .then((response) => {
            const pokemonObject = (response.find((o) => o.item_id === pokemonName.innerText));
            likeCount.innerText = `${pokemonObject.likes} likes`;
          });
        likeCount.classList.add('likeCount');

        const like = document.createElement('img');
        like.src = Like;
        like.classList.add('like');
        like.addEventListener('click', () => {
          addLike(pokemonName.innerText);
          const myMethod = () => {
            fetchLikes()
              .then((response) => {
                const pokemonObject = (response.find((o) => o.item_id === pokemonName.innerText));
                likeCount.innerText = '';
                likeCount.innerText = `${pokemonObject.likes} likes`;
              });
          };
          setTimeout(myMethod, 500);
        });

        infoDiv.appendChild(pokemonName);
        infoDiv.appendChild(like);

        const commentButton = document.createElement('button');
        commentButton.classList.add('commentButton');
        commentButton.innerText = 'Comment';
        const createCommentTag = (commentItem) => {
          const paragraph = document.createElement('p');
          paragraph.innerText = `${commentItem.creation_date} : ${commentItem.username} : ${commentItem.comment}`;
          return paragraph;
        };
        const retrieveComments = (item_id) => {
          allComments(item_id)
            .then((res) => {
              res.sort((a, b) => (a.creation_date < b.creation_date ? 1 : -1));
              document.getElementById('comment-title').innerText = commentCounter(res);
              document.getElementById('comments-holder').innerHTML = '';
              res.map((commentItem) => (
                document.getElementById('comments-holder').appendChild(createCommentTag(commentItem))
              ));
            });
        };

        commentButton.addEventListener('click', () => {
          const popUp = document.createElement('div');
          popUp.classList.add('pop-up');
          popUp.innerHTML = `
          <span class="closee" id="close"><p class="close-popUp">&times;</p></span>
          <div class="image-holder">
              <img src="${commentButton.previousElementSibling.previousElementSibling.previousElementSibling.src}" alt="" class="popUp-image">
          </div>
          <h2 class="popUp-title" id="pop-up-title">${pokemon.name}</h2>
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
          <h3 class="comment-title" id="comment-title"> ${retrieveComments(pokemon.name)}</h3>
          <div class="comments-holder" id="comments-holder">
              
          </div>
          <h3 class="addComment-title">Add comment</h3>
          <form class="addComment-form" id="comment-form">
              <input type="text" class="name" id="name" placeholder="Your Name" required>
              <textarea id="message" cols="30" rows="5" class="message" placeholder="Your insights" required></textarea>
              <button type="submit" id="add-comment" class="add-comment">Add comment</button>
          </form>
          `;
          document.body.appendChild(popUp);
          popUp.style.display = 'block';

          const form = document.getElementById('comment-form');
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            const pokename = document.getElementById('pop-up-title').innerText;

            const username = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const body = {
              item_id: pokename,
              comment: message,
              username,
            };
            postComment(body).then(() => {
              retrieveComments(pokename);
              document.getElementById('name').value = '';
              document.getElementById('message').value = '';
            });
          });

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