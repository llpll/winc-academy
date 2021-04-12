/* A Schrijf een JavaScript functie die een bepaald item weet te vinden 
en terug geeft op basis van een bepaalde value.
Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.
// result: {name: "Spiderman", alter_ego: "Peter Parker"} */

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }]

let findSpiderMan = function (array) {
  return array.find(function (element) {
    return element.name === 'Spiderman';
  });
}

console.log(findSpiderMan(superheroes))



/*   B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. 
  Gebruik de .forEach method of, een level hoger: de .map method. */
// result should be [2, 4, 6]

const ArrayValues = [1, 2, 3]
const doubleArrayValues = ArrayValues.map((num) => {
  return num * 2
})

console.log(doubleArrayValues);



/*  C In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) 
  in de array aanwezig is dat groter is dan 10. */

let containsNumberBiggerThan10 = function (array) {
  let result = false;
  array.forEach(function (element) {
    if (element > 10) {
      result = true;
    }
  });

  return result;
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 9, 20]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false  



/* D In een array met strings. Schrijf een JavaScript functie die kijkt of 
er een bepaalde string: "Italy" in de array aanwezig is. */
// result should be true

let isItalyInTheGreat7 = function (array) {
  let result = false;
  array.forEach(function (element) {
    if (element === 'Italy') {
      result = true;
    }
  });

  return result;
};
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));



/* E In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. 
Gebruik .forEach. */
// result should be [10, 40, 30, 60, 90, 70, 110]

let tenfold = function (array) {
  return array.map(x => x * 10);
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))



/* F In een array met integers. Schrijf een JavaScript functie die checkt 
of alle waardes in de array onder de 100 zijn, en true or false retourneert. */
// result should be: false


let isBelow100 = function (array) {
  return array.every(x => x < 100);
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))



/* G Bonus! Deze laatste is wat extra uitdagend. We hopen dat jullie deze challenge accepteren. 
Gebruik Google en wees een beetje baldadig (gebruik wellicht een klein stukje code die je kopieert).
In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt 
en het totaal van de som retourneert. Gebruik de .reduce method. En echt, gebruik Google. */
// result should be 1118

let bigSum = function (array) {
  let sum = 0;
  array.forEach(function (element) {
    sum = sum + element;
  });

  return sum;
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
