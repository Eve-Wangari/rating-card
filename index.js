const button = document.querySelector('button');
const first = document.querySelector('.first');
const second = document.querySelector('.second')
const numbers = document.querySelectorAll('span')
let rating = document.getElementById('rating');

const counter = (e)=>{
rating.innerHTML =e.target.textContent;
}
const change=()=>{

second.style.display = "block";
first.style.display = 'none'
}

button.addEventListener('click',change)
numbers.forEach(number => {number.addEventListener('click',counter)});