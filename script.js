const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    filter.addEventListener('click', event => {
        switch (event.target.value) {
            case 'avenger':
                showMovies(filterGetAvengersMovies());
                break;
            case 'nieuw':
                filterGetNewMovies();
                break;
            case 'xmen':
                filterGetXmenMovies();
                break;
            case 'princess':
                filterGetPrincessMovies();
                break;
            case 'batman':
                filterGetBatmanMovies();
                break;
            default:
            // code block
        }
        ;
    });

});

let filterGetAvengersMovies = function () {
    return movies.filter(movie => movie.Title.includes('Avengers'));
};

let filterGetNewMovies = function () {
    console.log('i need new movies');
};

let filterGetPrincessMovies = function () {
    console.log('i need [princess] movies');
};

let filterGetBatmanMovies = function () {
    console.log('i need [batm] movies');
};

let filterGetXmenMovies = function () {
    console.log('i need [xmens] movies');
};
const filmsList = document.getElementById('films-list');

let createLiElement = function (movie) {
    const listElement = document.createElement("li");
    listElement.classList.add("list-item-class");
    listElement.innerHTML = movie.Title + '<br /><img src="' + movie.Poster + '">';
    listElement.setAttribute('id', movie.imdbID);

    return listElement;
}



let showMovies = function (themovies) {
    filmsList.innerHTML = '';
    let addMovieToDom = function (movie) {
        let elem = createLiElement(movie);
        filmsList.appendChild(elem);
    }
    themovies.map(addMovieToDom);
}

showMovies(movies);

let resetFilter = function () {
    showMovies(movies);
}