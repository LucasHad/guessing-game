'use strict'

let score = document.querySelector('.score').textContent
score = parseInt(score)
const random = Math.floor(Math.random() * 20)
console.log(random)

let highscore = document.querySelector('.highscore').textContent
highscore = parseInt(highscore)

const win = function(){
    document.querySelector('body').style.backgroundColor = '#39ed69'
    document.querySelector('.text').textContent = 'congratulations, you won'
    document.querySelector('.highscore').textContent = ++highscore
    document.querySelector('.number').textContent = random
    document.querySelector('.message').textContent = 'correct!'
   
}

const loose = function(){
    document.querySelector('body').style.backgroundColor = '#a62626'
    document.querySelector('.text').textContent = 'game over'
}

const miss = function(){
    score--
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'you missed, input a new number' 
    if(score == 0){loose()}
}


const checking = function(){
let guess = document.querySelector('.guess');
guess = parseInt(guess.value)
    if(guess === random){
        win()
    }else{
        miss()
}
}

let btn = document.querySelector('.check')
btn.addEventListener('click', ()=>{
    checking();
})