// No arguments
const wallColor = function() {
    console.log('The wall has been painted red');
};
 wallColor();


// Single argument
const wallPaint = function(colors) {
    console.log('The wall has been painted ' + colors)
};

wallPaint('red');
wallPaint('blue')
wallPaint();


// Multiple arguments

const wallRenovation = function(orientation, colors) {
    console.log('The ' + orientation + ' wall has been painted ' + colors)
};

wallRenovation('north', 'yellow');
wallRenovation('east', "gray")


const test = function(colors, orientation) {
    console.log('The ' + orientation + ' wall has been painted ' + colors)
};

test('yellow', 'north');
test('east', "gray")