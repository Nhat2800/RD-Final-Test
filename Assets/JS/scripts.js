let menulink1 = document.querySelector('#menu-1');
let menulink2 = document.querySelector('#menu-2');
let menulink3 = document.querySelector('#menu-3');
let menulink4 = document.querySelector('#menu-4');

let list1 = document.querySelector('.list-1');
let list2 = document.querySelector('.list-2');
let list3 = document.querySelector('.list-3');
let list4 = document.querySelector('.list-4');


menulink1.onclick = ()  => {
    menulink1.classList.toggle('bx-x');
    list1.classList.toggle('open');
}
menulink2.onclick = ()  => {
    menulink2.classList.toggle('bx-x');
    list2.classList.toggle('open');
}
menulink3.onclick = ()  => {
    menulink3.classList.toggle('bx-x');
    list3.classList.toggle('open');
}
menulink4.onclick = ()  => {
    menulink4.classList.toggle('bx-x');
    list4.classList.toggle('open');
}