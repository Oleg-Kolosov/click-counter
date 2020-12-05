const counter = document.querySelector('.counter');
const container = document.querySelector('.container');

let value = 0;

container.addEventListener('click', event => {
    if (event.target.classList.contains('increment')) {
        value++;
    } else if (event.target.classList.contains('decrement')) {
        value--;
    } else if (event.target.classList.contains('reset')) {
        value = 0;
    }

    counter.innerHTML = value;
});
