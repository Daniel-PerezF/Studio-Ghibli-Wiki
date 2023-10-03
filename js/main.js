
const $menu = document.querySelector('#menu');
const $modal = document.querySelector('.menu-modal');
$menu.addEventListener('click', function () {
  $modal.style.display = 'block';

});

const $closeModal = document.querySelector('#close-menu');
$closeModal.addEventListener('click', function () {
  $modal.style.display = 'none';
});
// function getGhibliData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://ghibliapi.vercel.app/films');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   });
//   xhr.send();
// }

// getGhibliData();

// function createrFilmCard()

/* <div class="film-card">
  <div class="column-half">
    <img src="images/Spirited_Away.webp">
      <div class="fav-watch">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-bookmark"></i>
      </div>
  </div>
  <div class="column-half">
    <div class="film-info">
      <h3>千と千尋の神隠し</h3>
      <h3>Spirited Away</h3>
      <p>2001</p>
      <p>
        The story is about the adventures of a young ten-year-old girl named Chihiro as she wanders into the world
        of the gods
        and spirits...</p>
    </div>
  </div>
</div> */
