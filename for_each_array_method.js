
const colors = ['yellow', 'blue', 'red', 'orange'];

colors.forEach(color => console.log(color));



/* Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
1

Hoeveel regels neemt mijn forEach method in beslag?
4 (.lenght)

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
forEach > less words & {}, easier disticnction  

Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. 
Ben je nu aan het itereren? */

const profile = {
    name: "Kara",
    gender: "Female",
    age: "20",
    ocupation: "Teacher",
    city: "Amsterdam"
}

Object.defineProperty(profile, 'Kara', {
    value: 'v.meek',
    configurable: true,
    enumerable: true,
    writable: true
})
const k = Object.keys(profile)
log(k)

k.forEach(key=>log(profile[key]))


