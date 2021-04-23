const superheroes = [
  {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
  },
  {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
  },
  {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
  },
  {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
  },
  {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
  },
  {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
  },
  {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
  },
  {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
  },
  {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
  },
  {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
  },
  {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
  },
  {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
  },
  {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
  },
  {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
  },
  {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
  }
]

// 1 Maak een array van alle superhelden namen
const superheroesNames = function (array) {
  return array.map(superhero => {
    return superhero.name;
  });
};
console.log("list of superheroes names", superheroesNames(superheroes));



// 2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightSuperHeroes = superheroes.filter(superhero => superhero.weight < 190);

console.log("shortlist light superheroes", lightSuperHeroes);



// 3 alleen maar de namen van de superhelden die 200 pounds wegen
const NamesTweeHondredPounds = function (array) {
  return array.filter(superhero => {
    console.log(superhero);
    return superhero.weight === "200";
  });
};

console.log('200 only', NamesTweeHondredPounds(superheroes));



// 4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const firstAppearanceMovies = function (array) {
  return array.map(superhero => {
    return superhero.first_appearance;
  });
};
console.log("first appearance movies", firstAppearanceMovies(superheroes));



// 5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? 
// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const filterByPublisher1 = superheroes.filter(superhero => superhero.publisher === "DC Comics");
const filterByPublisher2 = superheroes.filter(superhero => superhero.publisher === "Marvel Comics");

console.log("filter by DC Comics", filterByPublisher1);
console.log("filter by Marvel Comics", filterByPublisher2);



// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! 
// Het gewicht van welk datatype is dat? nummer of string? hebben alle superhelden wel een gewicht?
const totalGewicht = function (array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue.weight !== 'unknown') {
      accumulator += parseInt(currentValue.weight);
    }

    return accumulator;
  }, 0);
};

console.log('total gewicht', totalGewicht(superheroes));

const excludeUnknown = function (array) {
  // array.filter(elem => elem.publisher === "DC Comics")
  return array.filter(superhero => {
    return superhero.weight !== 'unknown';
  });
};


const superheroesTotalWeight = function (array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue.weight !== undefined)
      return 'accumulator + currentValue';
  });
};

console.log('exclude unknown', excludeUnknown(superheroes));
console.log('calculate weight', superheroesTotalWeight(superheroes));



// 7 Doe hetzelfde met alle superhelden van Marvel Comics




// 8 Bonus: zoek de zwaarste superheld!
 
const test = function (array) {
  return array.reduce((accumulator, currentValue) => {
    if (accumulator < currentValue.weight && currentValue.weight !== 'unknown') {
      return currentValue.weight;
    }
    return accumulator;

  }, 0);
};

console.log('test ', test(superheroes)); 


const heaviestOfThemAll = function (array) {
  let max = 0;
  let currHero = 0;
  for (i in array) {
    if (array[i].weight !== 'unknown' && array[i].weight > max) {
      max = array[i].weight;
      currHero = i;
    }
  }

  return array[currHero];
}

console.log('heaviest', heaviestOfThemAll(superheroes));