const API_KEY = '416dedcae9c579478d4fa855cb6f408c';
const URL = 'https://api.themoviedb.org/3/';
const QS_AUTH = 'api_key=' + API_KEY;

async function getData(path) {
    const the_url = buildUrl(path);
    return await fetch(the_url);
}

async function postData(path, payload) {
    const the_url = buildUrl(path);
    return await fetch(the_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify( payload )
    });
}

function buildUrl (path) {
    let separator = '?';
    if (path.includes('?')) {
        separator = '&';
    }
    const the_url = URL + path + separator + QS_AUTH;
    console.log('rhe url', the_url);

    return the_url; 
}