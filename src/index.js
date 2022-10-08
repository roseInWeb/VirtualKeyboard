import './style.scss';

const keys = document.querySelectorAll('.keys');
const space = document.querySelector('.space');
const shift = document.querySelector('.shift');
const capsLock = document.querySelector('.caps-lock');
const leftAlt = document.querySelectorAll('.alt-left');
const rightAlt = document.querySelector('.alt-right');
const leftCtrl = document.querySelector('.ctrl-left');
const rightCtrl = document.querySelector('.ctrl-right');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
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
window.addEventListener('keyup', function (e){
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