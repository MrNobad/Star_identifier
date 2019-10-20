document.addEventListener('DOMContentLoaded', () => {

  var form = document.querySelector("form");
  var log = document.querySelector("#log");

  form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = output + entry[0] + "=" + entry[1] + "\r";
    };
    event.preventDefault();
  }, false);

  const newStarform = document.querySelector('#new-item-form');
  newStarform.addEventListener('submit', handleNewStarFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewStarFormSubmit = function (event) {
  event.preventDefault();

  const starListItem = createStarListItem(event.target);
  const starList = document.querySelector('#star-list');
  starList.appendChild(starListItem);

  event.target.reset();
}

const createStarListItem = function (form) {
  const starListItem = document.createElement('li');
  starListItem.classList.add('star-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  starListItem.appendChild(name);

  const category = document.createElement('h3');
  category.textContent = form.category.value;
  starListItem.appendChild(category);

  const mass = document.createElement('p');
  mass.textContent = form.mass.value;
  starListItem.appendChild(mass);

  const luminosity = document.createElement('p');
  luminosity.textContent = form.luminosity.value;
  starListItem.appendChild(luminosity);

  const drone = document.createElement('h4');
  drone.textContent = form.drone.value;
  starListItem.appendChild(drone);

  return starListItem;
}

const handleDeleteAllClick = function (event) {
  const starList = document.querySelector('#star-list');
  starList.innerHTML = '';
}
