const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

const currYear = new Date().getFullYear();

for (let person of array) {
  console.log("Dit is de gehele persoon:", person);
  console.log("Meet " + person.name);

  let birthYear = currYear - person.age;
  console.log(person.name + ' was born in ' + birthYear);

  console.log(person.name + ' is a ' + person.profession);

  if (person.age > 50) {
    console.log(person.name + " is older than 50");
  }

}

