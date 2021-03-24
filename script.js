// Checking if a number is big
const numberValue = function(number) {
    if (number > 100) {
        return true;
    } 
    return false;
};
console.log(numberValue(67));


// Bouncer at a club
const clubAdmission = function(age, noPeopleInside) {
    const maxPeople = 100;
    if (age < 18) {
        return "this is a club for adults";
    }
    if (noPeopleInside >= maxPeople) {
        return "it's too busy now, come back later";
    }
    return "come in";
};
 console.log(clubAdmission(21, 101));


// Calculating the average
const calculteAverage = function(no1, no2, no3, no4, no5) {
    let result = (no1 + no2 + no3 + no4 + no5) / 5;
    return Math.round (result);
};

console.log(calculteAverage(3,4,10,7,8));