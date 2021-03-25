// hey kiddo
const ageCheck = function (number) {
    if (number >= 18) {
        return true;
    }
    return false;
};

const greeting = function (age) {
    const adult = ageCheck(age);
    if (age = adult) {
        return "Hello there";
    }
    return "Hey kiddo";
};

console.log(ageCheck(25))
console.log(greeting(30));
console.log(greeting(15));
console.log(greeting(7));
console.log(greeting(70));


// VAT calculations
const vatCalculation = function (value, vatValue) {
    const highVat = 0.21;
    const lowVat = 0.09;
    if (vatValue == 'high') {
        return value * highVat;
    } else if (vatValue == 'low') {
        return value * lowVat;
    } else (vatValue == 'none')
    return value;
};

console.log(vatCalculation(1000, 'high'))
console.log(vatCalculation(320, 'low'))
console.log(vatCalculation(30, 'none'))


const priceInclVat = function (price, vat) {
    const vatPercentage = vatCalculation(price, vat);
    return price + vatPercentage;
};
console.log(priceInclVat(1000, 'high'))
console.log(priceInclVat(320, 'low'))
console.log(priceInclVat(21, 'high'))


// no2
const vatValue = function (price, vat) {
    return price * vat;
};

console.log(vatValue(1000, 0.21))
console.log(vatValue(320, 0.9))
console.log(vatValue(30, 0))

const priceBreakdown = function (value, added) {
    const vat = vatValue(value, added);
    const arr = [value, value + vat];
    return arr;
};
console.log(priceBreakdown(1000, 0.21))
console.log(priceBreakdown(320, 0.9))
console.log(priceBreakdown(21, 0.21))
console.log(priceBreakdown(34, 0))