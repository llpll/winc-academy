async function getGenres() {
    const result = await getData();
    return result;
}

res = getGenres();
console.log('final res',res);
