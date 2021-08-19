const API_KEY = 'ff61b985b41f5ab783e7f4cf17f567d2';
const URL = 'https://api.openweathermap.org/data/2.5/';
const QS_AUTH = 'appid=' + API_KEY;

async function getData(path) {
    const the_url = buildUrl(path);
    return await fetch(the_url);
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