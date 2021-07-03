let value = 0;

const counter = document.getElementById('counter');
const groupButtons = document.getElementById('group-buttons');

counter.innerText = value;

groupButtons.addEventListener('click', e => {
    if (e.target.id === 'decrease') {
        if (value === 0) return;
        value -= 1;
        counter.innerText = value;
    } else if (e.target.id === 'reset') {
        value = 0;
        counter.innerText = value;
    } else if (e.target.id === 'increase') {
        value += 1;
        counter.innerText = value;
    }
});
