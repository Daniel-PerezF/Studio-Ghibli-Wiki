/* exported data */
let data = {
  favorites: [],
  watchlist: []
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('ghibli-storage', dataJSON);
});

const ghibliStorage = localStorage.getItem('ghibli-storage');
if (ghibliStorage !== null) {
  data = JSON.parse(ghibliStorage);
}
