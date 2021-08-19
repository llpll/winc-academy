var PAGE;

function init()
{
    PAGE = document.getElementById('page')
}

function resetContent()
{
    PAGE.innerHTML = "";
}

function loadCountries()
{
    resetContent();
    let ul = document.createElement("ul");
    
    countryList.sort();
    countryList.forEach(elem => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(elem));
        ul.appendChild(li);
    })

    PAGE.appendChild(ul);
}

function loadWomen()
{
    resetContent();
    
    let women = randomPersonData.filter(person => {
        let dob = new Date(person.birthday.mdy);
        
        let monthDec = dob.getMonth() == 11 && dob.getDate() > 22;
        let monthJan = dob.getMonth() == 0 && dob.getDate() < 19;
        let steen = (monthDec || monthJan);
        return (person.gender == "female" && person.age > 30 && steen)
    });

    women.sort(function compareFn(a, b) { 
        if (a.surname > b.surname)
            return 1;
        else
            return -1;
     });

     women.forEach(person => {
        PAGE.innerHTML += person.surname + ' ' + person.name + ' ' + ' (Dob: '+ person.birthday.mdy +')' +'<img src="' + person.photo + '" /><br>';
    });
}

function loadCreditcards()
{
    resetContent();

    let persons = randomPersonData.filter(person => {
        let expireDate = new Date('01/'+person.credit_card.expiration);
        let now = new Date();
        let expires = expireDate.getFullYear() - now.getFullYear() === 1;

        return (person.age > 18 && expires)
    });

    persons.sort(function compareFn(a, b) { 
        let expA = new Date('01/' + a.credit_card.expiration);
        let expB = new Date('01/' + b.credit_card.expiration);
        
        if (expA > expB)
            return 1;
        else
            return -1;
     });

    persons.forEach(person => {
        PAGE.innerHTML += person.surname + ' ' + person.name + ' <br>Phone: '+ person.phone +'<br>CC Number: ' + person.credit_card.number + '<br> Exp: ' + person.credit_card.expiration + '<br><br>';
    });
}

function loadMensen()
{
    resetContent();

    let countries = [];
    let persons = randomPersonData.forEach(person => {
        if (person.region in countries) {
            countries[person.region] = {'country': person.region, 'total': countries[person.region].total + 1};
        } else {
            countries[person.region] = {'country': person.region, 'total': 1};
        }
    });
    
    let theCount = [];
    for (country in countries) {
        theCount.push(countries[country]);
    }

    theCount.sort(function compareFn(a, b) { 
        if (a.total > b.total)
            return -1;
        else
            return 1;
     });

    theCount.forEach(country => {
        PAGE.innerHTML += '' + country.country + ', ' + country.total + '<br>';
    });
}