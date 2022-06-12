'use strict';
function changeColor(){
    let h1 = document.querySelector( '.profile-title' );
    h1.innerHTML = h1.innerHTML.replace( /(\w+)$/i, '<span class="last-word">$&</span>' );
    let h2 = document.querySelectorAll( '.section-title' );
    [...h2].filter((e, i) => (i % 2 == 0)).forEach(e => e.innerHTML = e.innerHTML.replace( /(\w+)$/i, '<span class="section-title-word">$&</span>'));
}   
changeColor();

function toggleClass(){
    document.querySelector('.toggle').addEventListener('click', () => {
        document.querySelector('.fa-solid').classList.toggle('fa-xmark');
        document.querySelector('.nav').classList.toggle('nav-show');
    });
}
toggleClass();

function closeNav(){
    document.querySelectorAll('.n-item').forEach( el => {
        el.addEventListener('click', () => {
            setTimeout(() => {
                document.querySelector('.fa-solid').classList.remove('fa-xmark');
                document.querySelector('.nav').classList.remove('nav-show');
            }, 200);
        });
    });
}
closeNav();
