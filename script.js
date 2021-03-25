
// declaration
function calc(no1, no2) {
    const square1 = no1 * no1;
    const square2 = no2 * no2;
    return (square1 + square2) * (square1 + square2);
}
console.log(calc(3, 4));


// expression
const calculation = function (number1, number2) {
    const multiplication1 = number1 * number1;
    const multiplication2 = number2 * number2;
    const sum = multiplication1 + multiplication2;
    return sum * sum;
};
console.log(calculation(3, 4));


// arrow
const calculation2 = (number1, number2) => {
    const num1Multiplicated = number1 * number1;
    const num2Multiplicated = number2 * number2;
    return (num1Multiplicated + num2Multiplicated) * (num1Multiplicated + num2Multiplicated);
};
console.log(calculation2(3, 4));
