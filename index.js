'use strict';
function changeColor(){
    let h1 = document.querySelector( '.title' );
    h1.innerHTML = h1.innerHTML.replace( /(\w+)$/i, '<span class="last-word">$&</span>' );
    let h2 = document.querySelectorAll( '.section-title' );
    [...h2].filter((e, i) => (i % 2)).forEach(e => e.innerHTML = e.innerHTML.replace( /(\w+)$/i, '<span class="sect-word">$&</span>'));
}   
changeColor();
