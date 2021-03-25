// hey kiddo
const ageCheck = function(age) {
    if (age >= 18) {
        return true;
    }
    return false;
};

const greeting = function(age) {
    if (ageCheck(age)) {
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
const vatCalculation = function(value, vatValue) {
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


const priceInclVat = function(price, vat) {
    const vatPercentage = vatCalculation(price, vat);
    return price + vatPercentage;
};
console.log(priceInclVat(1000, 'high'))
console.log(priceInclVat(320, 'low'))
console.log(priceInclVat(21, 'high'))


// no2
const basePrice = function(totalPrice, vatPercentage) {
    console.log('look here');
    const startPrice = totalPrice / ((100+ vatPercentage) / 100);
    return startPrice;
};

console.log(basePrice(1210, 21))
console.log(basePrice(2.18, 9))
console.log(basePrice(37, 21))

const priceBreakdown = function (totalPrice, vatPercentage) {
    const priceWithoutVat = basePrice(totalPrice, vatPercentage);
    const vatValue = totalPrice - priceWithoutVat;
    return [priceWithoutVat, vatValue];
};
console.log(priceBreakdown(1210, 21))
console.log(priceBreakdown(670, 21))
console.log(priceBreakdown(56, 9))
