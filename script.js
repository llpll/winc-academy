const filters = document.querySelectorAll('.filter');


const filmsList = document.getElementById('films-list');

let createLiElement = function (movie) {
    const listElement = document.createElement("li");
    listElement.classList.add("list-item-class");
    listElement.innerHTML = '<a href="https://www.imdb.com/title/' + movie.imdbID + '" target="_blank""><img src="' + movie.Poster + '"></a>';
    listElement.setAttribute('id', movie.imdbID);

    return listElement;
}

let showMovies = function (themovies) {
    filmsList.innerHTML = '';
    if (themovies.length == 0) {
        filmsList.innerHTML = 'Nothing found! Try smth else!';
    }

    let addMovieToDom = function (movie) {
        let elem = createLiElement(movie);
        filmsList.appendChild(elem);
    }
    themovies.map(addMovieToDom);
}

showMovies(movies);



filters.forEach(filter => {
    filter.addEventListener('click', event => {
        switch (event.target.value) {
            case 'avenger':
                showMovies(filterGetAvengersMovies());
                break;
            case 'nieuw':
                showMovies(filterGetNewMovies());
                break;
            case 'xmen':
                showMovies(filterGetXmenMovies());
                break;
            case 'princess':
                showMovies(filterGetPrincessMovies());
                break;
            case 'batman':
                showMovies(filterGetBatmanMovies());
                break;
            default:
            // do nothing
        }
        ;
    });

});
let src = document.getElementById('search');
src.addEventListener('input', function (e) {
    let term = e.target.value;
    if (term.length < 3) {
        return;
    }
    let found = movies.filter(movie => movie.Title.includes(term));
    return showMovies(found);
});

let filterGetAvengersMovies = function () {
    return movies.filter(movie => movie.Title.includes('Avengers'));
};

let filterGetNewMovies = function () {
    return movies.filter(movie => movie.Year >= 2014);
};

let filterGetPrincessMovies = function () {
    return movies.filter(movie => movie.Title.includes('Princess'));
};

let filterGetBatmanMovies = function () {
    return movies.filter(movie => movie.Title.includes('Batman'));
};

let filterGetXmenMovies = function () {
    return movies.filter(movie => movie.Title.includes('X-Men'));
};



let resetFilter = function () {
    showMovies(movies);
}