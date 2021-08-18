function getFavMovie() {
    const endpoint = 'movie/115';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let title = document.getElementById('my-fav');
        title.appendChild(document.createTextNode('My Fav: ' + data['title']));
    }) 
    .catch(error => {console.log(error)});
}

function getGenres() {
    const endpoint = 'genre/movie/list';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let ul = document.getElementById('genres');
        data['genres'].forEach(genre => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(genre['name'] + ' -> ID: ' + genre['id']));
            ul.appendChild(li);
        });
    }) 
    .catch(error => {console.log(error)});
}

function getTopMovies() {
    const endpoint = 'movie/top_rated';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let ul = document.getElementById('top-rated');
        let top10 = data['results'].slice(0, 10);
        top10.forEach((movie, index) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(movie['title'] + ' -> ID: ' + movie['id']));
            ul.appendChild(li);
        }); 
    }) 
    .catch(error => {console.log(error)});
}

function getTopRatedActionMovies() {
    const endpoint = 'discover/movie?with_genres=28';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let ul = document.getElementById('top-rated-action');
        let top10 = data['results'].slice(0, 10);
        top10.forEach((movie, index) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(movie['title'] + ' -> ID: ' + movie['id']));
            ul.appendChild(li);
        }); 
    }) 
    .catch(error => {console.log(error)});
}

function getMoviesByYear(year) {
    const endpoint = 'discover/movie?primary_release_year=' + year;
    
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let ul = document.getElementById('1975-list');
        let top10 = data['results'].slice(0, 10);
        top10.forEach((movie, index) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(movie['title'] + ' -> ID: ' + movie['id']));
            ul.appendChild(li);
        }); 
    }) 
    .catch(error => {console.log(error)});
}

function postRating() {
    const endpoint = 'authentication/guest_session/new';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let sessionId = data['guest_session_id'];
        rateMovie(sessionId);
    }) 
    .catch(error => {console.log(error)});
}

function rateMovie(sessionId) {
    const endpoint = '/movie/115/rating?guest_session_id=' + sessionId;
    const data = {
        "value": 10
    };

    postData(endpoint, data).then(response => response.json())
    .then(data => { 
        console.log('ura', data);

    }) 
    .catch(error => {console.log(error)});
}

getFavMovie();
getGenres();
getTopMovies();
getTopRatedActionMovies();
getMoviesByYear(1975);

postRating();
