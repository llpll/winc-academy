const age = 18;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Ana';
const totalAmount = 106;


if (age >= 18) {
    console.log('You are legible to enter the bar')

} else if (age < 10) {
    console.log('You are just 10!')

} else {
    console.log('You are not old enough to have drinks in this bar')
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}


if (isFemale) {
    console.log('You may buy tickets for the ladies night!')

} else {
    console.log('Only ladies allowed!')
}


if (driverStatus == 'bob') {
    console.log('You may drive home!')

} else {
    console.log('Somebody else has to drive you home!')
}


if (name == 'Sarah' || name == 'Bram')
    console.log('Gratis biertje!')


if (totalAmount >= 100) {
    console.log('Je krijgt een gratis flesje champagne!')
} else if (totalAmount >= 50) {
    console.log('Je krijgt een gratis portie nachos!')
} else if (totalAmount >= 25) {
    console.log('Je krijgt gratis bitterballen!')
}