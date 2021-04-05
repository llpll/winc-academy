// let li = document.querySelectorAll(".nav-toggle ul li"); 
// let radios = document.querySelectorAll(".nav-toggle ul li input");
let body = document.querySelector("body");
// let redLi = document.querySelector (".red-li");


// const resetRadios = function() {
//   for (i = 0; i < radios.length; i++) {
//     radios[i].checked = false;
//   }
// }

const changeColorRed = function() {
    // body.className = "";
    body.classList.add('red');
//     resetRadios();
//     radios[i].checked = true;
//   }

//   redLi.addEventListener('click', changeColorRed);
  document.getElementByClass('red-li').addEventListener('click', changeColorRed);


