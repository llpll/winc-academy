
const btn = document.getElementById('mybutton')

const btnAlert = () => {
    alert('You clicked me!');
};
btn.addEventListener('click', btnAlert);

const bckrBtn = document.querySelector('.blue-background:nth-child(2)')

// const changeColor = () => {
// bckrBtn.classList.add ('red-background') ;
// };
// bckrBtn.addEventListener ('click', changeColor);

const toggleColor = () => {
    bckrBtn.classList.toggle('red-background');
};
bckrBtn.addEventListener('click', toggleColor);


