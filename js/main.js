// Menu View Swapping
const $fullPage = document.querySelector('.full-page');
const $ghibliImg = document.querySelector('.ghibli-logo');

$ghibliImg.addEventListener('click', function () {
  $filmsPage.classList.remove('hidden');
  $aboutPage.classList.add('hidden');
  $modal.classList.add('hidden');
  $fullPage.classList.add('hidden');
  $favoritesView.classList.add('hidden');
  $watchlistView.classList.add('hidden');
  removeDom();
  removeWatchlistDom();
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
  $favoritesView.classList.add('hidden');
  $watchlistView.classList.add('hidden');
  removeDom();
  removeWatchlistDom();
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
  $favoritesView.classList.add('hidden');
  $watchlistView.classList.add('hidden');
  removeDom();
  removeWatchlistDom();
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
    $favoritesView.classList.add('hidden');
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
    if (data.favorites.some(anime => anime.title === filmData.title)) {
      // do nothing
      $fav.setAttribute('class', 'fa-solid fa-heart');
    }

    $fav.addEventListener('click', function () {
      $fav.setAttribute('class', 'fa-solid fa-heart');
      const favoriteObj = {
        id: filmData.id,
        title: filmData.title,
        original_title: filmData.original_title,
        image: filmData.image
      };

      if (!data.favorites.some(anime => anime.title === filmData.title)) {
        // do nothing
        data.favorites.push(favoriteObj);
      }
    });

    const $watch = document.createElement('i');
    $watch.setAttribute('class', 'fa-regular fa-bookmark');
    $favWatchDiv.append($watch);
    if (data.watchlist.some(anime => anime.title === filmData.title)) {
      // do nothing
      $watch.setAttribute('class', 'fa-solid fa-bookmark');
    }

    $watch.addEventListener('click', function () {
      $watch.setAttribute('class', 'fa-solid fa-bookmark');

      const watchlistObj = {
        id: filmData.id,
        title: filmData.title,
        original_title: filmData.original_title,
        image: filmData.image
      };
      if (!data.watchlist.some(anime => anime.title === filmData.title)) {
        // do nothing
        data.watchlist.push(watchlistObj);
      }
    });

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

  const $halfDiv2 = document.createElement('div');
  $halfDiv2.setAttribute('class', 'column-half');
  $cardDiv.append($halfDiv2);

  const $infoDiv = document.createElement('div');
  $infoDiv.setAttribute('class', 'film-info');
  $infoDiv.setAttribute('data-id', filmData.id);
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

// Favoriting Functionality
function toggleNoEntry() {
  const $noEntries = document.querySelector('.no-entries');
  const empty = data.favorites.length;
  if (empty > 0) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}

const $favoritesTab = document.querySelector('#favorites');
const $favoritesView = document.querySelector('.container4');
$favoritesTab.addEventListener('click', function () {
  toggleNoEntry();
  removeWatchlistDom();

  favoritedFilm();
  $filmsPage.classList.add('hidden');
  $aboutPage.classList.add('hidden');
  $modal.classList.add('hidden');
  $fullPage.classList.add('hidden');
  $favoritesView.classList.remove('hidden');
  $watchlistView.classList.add('hidden');
});

function favoritedFilm() {
  const $favorites = document.querySelector('.favorites');

  for (let i = 0; i < data.favorites.length; i++) {
    const $favCard = document.createElement('div');
    $favCard.setAttribute('class', 'fav-card');
    $favCard.setAttribute('data-id', data.favorites[i].id);
    $favorites.append($favCard);

    const $favColumn = document.createElement('div');
    $favColumn.setAttribute('class', 'favorite-column');
    $favCard.append($favColumn);

    const $img = document.createElement('img');
    $img.setAttribute('src', data.favorites[i].image);
    $favColumn.append($img);

    const $filmInfo = document.createElement('div');
    $filmInfo.setAttribute('class', 'film-info');
    $filmInfo.setAttribute('data-id', data.favorites[i].id);
    $favColumn.append($filmInfo);

    const $filmTitle = document.createElement('h3');
    $filmInfo.append($filmTitle);
    $filmTitle.textContent = data.favorites[i].original_title;

    const $filmTitleEng = document.createElement('h3');
    $filmInfo.append($filmTitleEng);
    $filmTitleEng.textContent = data.favorites[i].title;

    const $removeBtn = document.createElement('button');
    $removeBtn.setAttribute('class', 'remove');
    $removeBtn.setAttribute('type', 'button');
    $removeBtn.textContent = 'Remove';
    $filmInfo.append($removeBtn);

    const $removeBtns = document.querySelectorAll('.remove');
    for (let i = 0; i < $removeBtns.length; i++) {
      const $btn = $removeBtns[i];
      $btn.addEventListener('click', function () {
        const $card = $btn.parentElement;
        const cardId = $card.getAttribute('data-id');
        for (let j = 0; j < data.favorites.length; j++) {
          const dataArr = data.favorites[j];
          if (dataArr.id === cardId) {
            data.favorites.splice(j, 1);
          }
        }

        removeFavorites(cardId);
        toggleNoEntry();
      });
    }
  }
}

function removeFavorites(id) {
  const $favCards = document.querySelectorAll('.fav-card');
  const $favorites = document.querySelector('.favorites');
  for (let i = 0; i < $favCards.length; i++) {
    const $card = $favCards[i];
    const $cardId = $card.getAttribute('data-id');
    if ($cardId === id) {
      $favorites.removeChild($card);
    }
  }
}

function removeDom() {
  const favQ = document.querySelectorAll('.fav-card');
  for (let i = 0; i < favQ.length; i++) {
    favQ[i].remove();
  }
}

// Watchlist Functionality

const $watchlistPage = document.querySelector('#watchlist');
const $watchlistView = document.querySelector('.container5');
$watchlistPage.addEventListener('click', function () {
  toggleWatchNoEntry();
  removeWatchlistDom();
  watchlistFilms();
  $filmsPage.classList.add('hidden');
  $aboutPage.classList.add('hidden');
  $modal.classList.add('hidden');
  $fullPage.classList.add('hidden');
  $favoritesView.classList.add('hidden');
  $watchlistView.classList.remove('hidden');
});

function removeWatchlistDom() {
  const $watchlist = document.querySelectorAll('.watch-card');
  for (let i = 0; i < $watchlist.length; i++) {
    $watchlist[i].remove();
  }
}

function watchlistFilms() {
  const $watchlist = document.querySelector('.watchlist');

  for (let i = 0; i < data.watchlist.length; i++) {
    const $watchCard = document.createElement('div');
    $watchCard.setAttribute('class', 'watch-card');
    $watchCard.setAttribute('data-watch-id', data.watchlist[i].id);
    $watchlist.append($watchCard);

    const $watchlistColumn = document.createElement('div');
    $watchlistColumn.setAttribute('class', 'watchlist-column');
    $watchCard.append($watchlistColumn);

    const $img = document.createElement('img');
    $img.setAttribute('src', data.watchlist[i].image);
    $watchlistColumn.append($img);

    const $watchlistInfo = document.createElement('div');
    $watchlistInfo.setAttribute('class', 'watchlist-info');
    $watchlistInfo.setAttribute('data-watch-id', data.watchlist[i].id);
    $watchlistColumn.append($watchlistInfo);

    const $filmTitle = document.createElement('h3');
    $watchlistInfo.append($filmTitle);
    $filmTitle.textContent = data.watchlist[i].original_title;

    const $filmTitleEng = document.createElement('h3');
    $watchlistInfo.append($filmTitleEng);
    $filmTitleEng.textContent = data.watchlist[i].title;

    const $removeBtn = document.createElement('button');
    $removeBtn.setAttribute('class', 'remove-watchlist');
    $removeBtn.setAttribute('type', 'button');
    $removeBtn.textContent = 'Remove';
    $watchlistInfo.append($removeBtn);

  }
}

function toggleWatchNoEntry() {
  const $noEntries = document.querySelector('.watch-no-entries');
  const empty = data.watchlist.length;
  if (empty > 0) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}
