

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}



        
let f_slides = document.querySelectorAll('.slide-feedback');
let f_index = 0;

function nextf(){
f_slides[f_index].classList.remove('active');
f_index = (f_index + 1) % f_slides.length;
f_slides[f_index].classList.add('active');
}

function prevf(){
f_slides[f_index].classList.remove('active');
f_index = (f_index - 1 + f_slides.length) % f_slides.length;
f_slides[f_index].classList.add('active');
}