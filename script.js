// background color toggle
let nav = document.querySelector(".nav-items");
let navItems = document.querySelector(".nav-items li");
let liArray = document.querySelectorAll("li");
let radios = document.querySelector("input");
let chosenColorContainer = document.querySelector('#chosen-color');

const resetRadios = function () {
    for (var i in radios) {
        radios[i].checked = false;
    }
}

const changeColor = function (e) {
    // resetRadios();
    let li = e.target;
    let radio = li.querySelector("input");
    radio.checked = true;
    let color = radio.value;

    var body = document.body;
    body.className = "";

    if (color !== 'home') {
        body.classList.add(color);
        chosenColorContainer.innerHTML = 'to play a color game';
    }

    chosenColorContainer.innerHTML = "You've picked " + color;
    closeMenu();
}


for (var i = 0; i < liArray.length; i++) {
    liArray[i].addEventListener('click', changeColor);
}



// menu animation
let sidebarBtn = document.querySelector('#btn');
let pageContent = document.querySelector('#message');

sidebarBtn.addEventListener('click', function () {

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        nav.classList.remove('active');
    } else {
        this.classList.add('active');
        nav.classList.add('active');
    }
});

let closeMenu = function() {
    if (nav.classList.contains('active')) {
        sidebarBtn.classList.remove('active');
        nav.classList.remove('active');
    }
}

pageContent.addEventListener('click', function() {
    closeMenu();
});

window.addEventListener('keydown', function (event) {

    if (nav.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        nav.classList.remove('active');
    }
});