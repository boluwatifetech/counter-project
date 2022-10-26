const colors = ['red', 'green', 'aqua', 'lightblue', 'coral', 'chocolate', 'brown'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}