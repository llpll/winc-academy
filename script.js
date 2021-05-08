const animalsBtns = document.querySelectorAll('.big-five-button');
const spottedAnimalsList = document.getElementById('spotted-animals-list');
const spottedAnimals = spottedAnimalsList.querySelectorAll('.spotted-animals-list-item');
const btnRemoveAll = document.getElementById('remove-all-button');
const btnRemove = document.getElementById('remove-first-item-button');

animalsBtns.forEach(el => el.addEventListener('click', event => {
    spottedAnimal(event.target.innerHTML);
}));

btnRemove.addEventListener('click', event => {
    var list = document.getElementById('spotted-animals-list');
    var spottedAnimals = list.querySelectorAll('.spotted-animals-list-item');
    list.removeChild(spottedAnimals[0]);
});

btnRemoveAll.addEventListener('click', event => {
    spottedAnimalsList.innerHTML = '';
});

const spottedAnimal = function (animal) {
    let elem = document.createElement('li');
    elem.className = "spotted-animals-list-item";
    elem.innerHTML = animal;
    spottedAnimalsList.append(elem);
}
