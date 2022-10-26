let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
const look = document.querySelector('.look');

btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;

        } else { count = 0; }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count == 0) {
            value.style.color = 'black';
            document.body.style.backgroundColor = 'white';

        }

        if (count == 2) {
            document.body.style.backgroundColor = "aqua";
        }
        value.innerText = count;
        if (count === -2) {
            look.innerText = "it is risky it get beyond this!!";
        } else {
            look.innerText = '';
        }
        if (count === -3) {
            document.body.style.backgroundColor = 'black'
            document.body.style.Color = 'black'
        }

    });
});