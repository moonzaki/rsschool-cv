'use strict';
function changeColor(){
    let a = document.querySelector( '.title' );
    a.innerHTML = a.innerHTML.replace( /(\w+)$/i, '<span class="last-word">$&</span>' );
   
}
changeColor();
