import './style.scss';

const body = document.querySelector('body');
const keys = document.querySelectorAll('.keys');
const space = document.querySelector('.space');
const shift = document.querySelector('.shift');
const capsLock = document.querySelector('.caps-lock');
const leftAlt = document.querySelectorAll('.alt-left');
const rightAlt = document.querySelector('.alt-right');
const leftCtrl = document.querySelector('.ctrl-left');
const rightCtrl = document.querySelector('.ctrl-right');
const nightMode = document.querySelector('.night-mode');
const toggleCicle = document.querySelector('.toggle-cicle');
const keyboardKeys = document.querySelector('.keyboard_keys');
const textInput = document.querySelector('.text');
const colorsInput = document.querySelector('.colors-input');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
            break;
        }
        if (e.code == 'Space') {
            space.classList.add('active');
            break;
        }
        if (e.code == 'Shift') {
            shift.classList.add('active');
            break;
        }
        if (e.code == 'CapsLock') {
            capsLock.classList.toggle('active');
            break;
        }
        if (e.code == 'AltLeft') {
            leftAlt.classList.add('active');
            break;
        }
        if (e.code == 'AltRight') {
            rightAlt.classList.add('active');
            break;
        }
        if (e.code == 'ControlLeft') {
            leftCtrl.classList.add('active');
            break;
        }
        if (e.code == 'ControlRight') {
            rightCtrl.classList.add('active');
            break;
        }
    }
});
window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
            break;
        }
        if (e.code == 'Space') {
            space.classList.remove('active');
            break;
        }
        if (e.code == 'Shift') {
            shift.classList.remove('active');
            break;
        }
        if (e.code == 'AltLeft') {
            leftAlt.classList.remove('active');
            break;
        }
        if (e.code == 'AltRight') {
            rightAlt.classList.remove('active');
            break;
        }
        if (e.code == 'ControlLeft') {
            leftCtrl.classList.remove('active');
            break;
        }
        if (e.code == 'ControlRight') {
            rightCtrl.classList.remove('active');
            break;
        }
    } 
});

nightMode.addEventListener('click', () => {
    toggleCicle.classList.toggle('active');
    body.classList.toggle('active');
    keyboardKeys.classList.toggle('active');
    keys.forEach((el) => {
        el.classList.toggle('keys_night');
    })
    nightMode.classList.toggle('active');
    textInput.classList.toggle('active');
    textInput.focus();
});

colorsInput.addEventListener('input', () => {
    keyboardKeys.style.backgroundColor = colorsInput.value;
    textInput.focus();
});

window.addEventListener('click', () => textInput.focus());