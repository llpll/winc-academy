const API_KEY = '416dedcae9c579478d4fa855cb6f408c';
const URL = 'https://api.themoviedb.org/3/genre/movie/list';
const URL_AUTH = URL + '?api_key=' + API_KEY;

async function getData() {
    console.log('calling getData');
    const result = await fetch(URL_AUTH)
        .then(response => response.json())
            .then(data => { console.log('here', data); return data; }) 
        .catch(error => {
            console.log(error)
        });
    ;
}

