
// part 1
const btn = document.getElementById('mybutton');

const btnAlert = () => {
    alert('You clicked me!');
};
btn.addEventListener('click', btnAlert);

/* const alertButton = document.getElementById("mybutton");
alertButton.addEventListener("click", function () {
  alert("button clicked!");
}); */


// part 2
/* const bckrBtn = document.querySelector('.blue-background:nth-child(2)')

const changeColor = () => {
bckrBtn.classList.add ('red-background') ;
};
bckrBtn.addEventListener ('click', changeColor); */



// part 3
const toggleColor = () => {
    bckrBtn.classList.toggle('red-background');
};
bckrBtn.addEventListener('click', toggleColor);


