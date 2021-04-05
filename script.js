let navToggle = document.getElementById(".nav-toggle img")
let nav = document.querySelectorAll(".nav-items");
let navItems = document.getElementById("test");
let liArray = document.querySelectorAll("li");
let radios = document.getElementById("input");
// let navItems2 = document.getElementById("test")


let toggleNavStatus = false;

window.onload=function(){
    if (toggleNavStatus === false) {
        // console.log(navItems);
        // console.log(navItems2);
        navItems.style.visibility = "visible";
        nav.style.width = "250px";
        // navItmes.style.opacity = "1";
        console.log(liArray);

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        nav.style.width = "50px";
        // liArray[i].style.opacity = "0";
        navItems.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}


/*   
let toggleNav = function () {
    if (toggleNavStatus === false) {
        console.log(navItems);
        console.log(navItems2);
        navItems2.style.visibility = "visible";
        nav.style.width = "250px";
        // navItmes.style.opacity = "1";
        console.log(liArray);

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        nav.style.width = "50px";
        // liArray[i].style.opacity = "0";
        navItems2.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

navToggle.addEventListener('click', toggleNav); */








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
    }
}

for (var i = 0; i < liArray.length; i++) {
    liArray[i].addEventListener('click', changeColor);
}


