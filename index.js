'use strict';
function changeColor(){
    let h1 = document.querySelector( '.profile-title' );
    h1.innerHTML = h1.innerHTML.replace( /(\w+)$/i, '<span class="last-word">$&</span>' );
    let h2 = document.querySelectorAll( '.section-title' );
    [...h2].filter((e, i) => (i % 2 == 0)).forEach(e => e.innerHTML = e.innerHTML.replace( /(\w+)$/i, '<span class="section-title-word">$&</span>'));
}   
changeColor();

function toggleClass(){
    let nav = document.querySelector('.nav'); 
    document.querySelector('.toggle').addEventListener('click', () => {
        nav.classList.toggle('nav-show');
    });
}
toggleClass();

function closeNav(){
    let nav = document.querySelector('.nav'); 
    let li = document.querySelectorAll('.n-item');
    li.forEach( el => {
        el.addEventListener('click', () => {
            setTimeout(() => {
            nav.classList.remove('nav-show');
            }, 1000);
        });
    });
}
closeNav();
