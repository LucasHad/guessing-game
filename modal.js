'use strict';

const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('.show-modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')


const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closemodal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closemodal()
    }
})

btnClose.addEventListener('click', closemodal)

overlay.addEventListener('click', closemodal)

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', openModal)    
}


