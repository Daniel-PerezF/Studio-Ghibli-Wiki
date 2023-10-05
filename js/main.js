// Menu View Swapping
const $fullPage = document.querySelector('.full-page');
const $ghibliImg = document.querySelector('.ghibli-logo');
$ghibliImg.addEventListener('click', function () {
  $filmsPage.classList.remove('hidden');
  $aboutPage.classList.add('hidden');
  $modal.classList.add('hidden');
  $fullPage.classList.add('hidden');
});

const $menu = document.querySelector('#menu');
const $modal = document.querySelector('.menu-modal');
$menu.addEventListener('click', function () {
  $modal.classList.remove('hidden');
});

const $closeModal = document.querySelector('#close-menu');
$closeModal.addEventListener('click', function () {
  $modal.classList.add('hidden');
});

const $filmsPage = document.querySelector('.films');
const $aboutBtn = document.querySelector('#about');
const $aboutPage = document.querySelector('.container3');

$aboutBtn.addEventListener('click', function () {
  $filmsPage.classList.add('hidden');
  $aboutPage.classList.remove('hidden');
  $modal.classList.add('hidden');
  while ($fullPage.firstChild) {
    $fullPage.removeChild($fullPage.lastChild);
  }
});

const $filmsBtn = document.querySelector('#films');
$filmsBtn.addEventListener('click', function () {
  $filmsPage.classList.remove('hidden');
  $aboutPage.classList.add('hidden');
  $modal.classList.add('hidden');
  $fullPage.classList.remove('hidden');
  while ($fullPage.firstChild) {
    $fullPage.removeChild($fullPage.lastChild);
  }
});

// Call Api and Create DOM
function getGhibliData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ghibliapi.vercel.app/films');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const filmInfo = xhr.response;
    for (let i = 0; i < filmInfo.length; i++) {
      const filmData = filmInfo[i];
      createFilmCardPreview(filmData);
    }
  });
  xhr.send();
}
getGhibliData();

function createFilmCardPreview(filmData) {
  const $appendMeDiv = document.querySelector('#append-me');
  const $cardDiv = document.createElement('div');
  $cardDiv.setAttribute('class', 'film-card');
  $cardDiv.setAttribute('data-id', filmData.id);
  $appendMeDiv.append($cardDiv);
  $cardDiv.addEventListener('click', function () {
    $filmsPage.classList.add('hidden');
    $fullPage.classList.remove('hidden');

    while ($fullPage.firstChild) {
      $fullPage.removeChild($fullPage.lastChild);
      $fullPage.classList.remove('hidden');
    }

    const $columnDiv = document.createElement('div');
    $columnDiv.setAttribute('class', 'column');
    $fullPage.append($columnDiv);

    const $fullCardDiv = document.createElement('div');
    $fullCardDiv.setAttribute('class', 'full-card');
    $columnDiv.append($fullCardDiv);

    const $fullInfoDiv = document.createElement('div');
    $fullInfoDiv.setAttribute('class', 'full-info');
    $fullCardDiv.append($fullInfoDiv);

    const $img = document.createElement('img');
    $img.setAttribute('src', filmData.image);
    $fullInfoDiv.append($img);

    const $favWatchDiv = document.createElement('div');
    $favWatchDiv.setAttribute('class', 'fav-watch');
    $fullInfoDiv.append($favWatchDiv);

    const $fav = document.createElement('i');
    $fav.setAttribute('class', 'fa-regular fa-heart');
    $favWatchDiv.append($fav);

    const $watch = document.createElement('i');
    $watch.setAttribute('class', 'fa-regular fa-bookmark');
    $favWatchDiv.append($watch);

    const $textInfoDiv = document.createElement('div');
    $textInfoDiv.setAttribute('class', 'text-info');
    $fullInfoDiv.append($textInfoDiv);

    const $filmName = document.createElement('h3');
    $textInfoDiv.append($filmName);
    $filmName.textContent = filmData.original_title;

    const $filmNameEng = document.createElement('h3');
    $textInfoDiv.append($filmNameEng);
    $filmNameEng.textContent = filmData.title;

    const $year = document.createElement('p');
    $textInfoDiv.append($year);
    $year.textContent = filmData.release_date;

    const $desc = document.createElement('p');
    $textInfoDiv.append($desc);
    $desc.textContent = filmData.description;

    const $director = document.createElement('p');
    $textInfoDiv.append($director);
    $director.textContent = `Director: ${filmData.director}`;

    const $producer = document.createElement('p');
    $textInfoDiv.append($producer);
    $producer.textContent = `Producer: ${filmData.producer}`;
  });

  const $halfDiv = document.createElement('div');
  $halfDiv.setAttribute('class', 'column-half');
  $cardDiv.append($halfDiv);

  const $filmImg = document.createElement('img');
  $filmImg.setAttribute('src', filmData.image);
  $halfDiv.append($filmImg);

  const $favWatchDiv = document.createElement('div');
  $favWatchDiv.setAttribute('class', 'fav-watch');
  $halfDiv.append($favWatchDiv);

  const $favIcon = document.createElement('i');
  $favIcon.setAttribute('class', 'fa-regular fa-heart');
  $favWatchDiv.append($favIcon);

  const $watchIcon = document.createElement('i');
  $watchIcon.setAttribute('class', 'fa-regular fa-bookmark');
  $favWatchDiv.append($watchIcon);

  const $halfDiv2 = document.createElement('div');
  $halfDiv2.setAttribute('class', 'column-half');
  $cardDiv.append($halfDiv2);

  const $infoDiv = document.createElement('div');
  $infoDiv.setAttribute('class', 'film-info');
  $halfDiv2.append($infoDiv);

  const $filmName = document.createElement('h3');
  $infoDiv.append($filmName);
  $filmName.textContent = filmData.original_title;

  const $filmNameEng = document.createElement('h3');
  $infoDiv.append($filmNameEng);
  $filmNameEng.textContent = filmData.title;

  const $year = document.createElement('p');
  $infoDiv.append($year);
  $year.textContent = filmData.release_date;

  const $desc = document.createElement('p');
  $infoDiv.append($desc);
  const shorten = filmData.description.slice(0, 101) + '...';
  $desc.textContent = shorten;
}
