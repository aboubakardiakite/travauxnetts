let modal = null;
const  focusableSelector = 'button, a, input,textarea'; // les element qui seront focusable dans ma boire modal
let focusable= [] // mon tableau qui contiendra mes element
let previouslyFocusElement = null;

const openModal = function(e){ // une fonction qui ouvre mon boite modal lorsq'on clique sur le a
    e.preventDefault(); // annuler l'evenement par defaut
    modal = document.querySelector("#modal1");// selectionner a a l'aide son attribut href
    console.log(modal);
    focusable = Array.from(modal.querySelectorAll(focusableSelector));
    previouslyFocusElement = document.querySelector(':focus');
    focusable[0].focus();
    modal.style.display = null;
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal','true');
    modal.addEventListener('click',closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click',stopPropagation);

}

const closeModal = function(e) { // fonction ferme le modal avec un button click non pas sur le modal
    if(modal == null) return;
    if(previouslyFocusElement !== null) previouslyFocusElement.focus();
    e.preventDefault();
    // window.setTimeout(function() {
    //     modal.style.display = "none";
    //     modal = null;
    // },500)
    modal.setAttribute('aria-hidden','true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click',closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click',closeModal);
    modal.querySelector('.js-modal-stop').removeEventListener('click',stopPropagation);
    const hideMoal = function(e) {
        e.preventDefault();
        modal.style.display = 'none';
        modal.removeEventListener('animationend',hideMoal);
        modal = null;
    }
    modal.addEventListener('animationend',hideMoal);

}
const stopPropagation = function(e) {
    e.stopPropagation()
}

const focusInModal = function(e) {
    e.preventDefault();
    let index = focusable.findIndex(f => f === modal.querySelector(':focus'));
    if(e.shiftKey === true) {
        index--;
    }else{
        index++;
    }
    if(index < 0){
        index = focusable.length - 1;
    }
    if(index >= focusable.length){
        index = 0;
    }
    focusable[index].focus();
}

window.addEventListener('keydown',function(e) {
    if(e.key === "Escape" || e.key === "Esc"){
        closeModal(e);
    }
    if(e.key==='Tab' && modal !== null ){
        focusInModal(e)
    }
    
})
document.querySelectorAll('.js-modal').forEach(a=>{ 
    a.addEventListener('click',openModal);
})