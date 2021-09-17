const getWordLengths = function(someWords) {
    let lengths = [];
    someWords.map(word => {lengths.push(word.length)});
    
    return lengths;
};

module.exports = getWordLengths;