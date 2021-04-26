const nav = document.querySelector('.nav__list');
const toogle = document.querySelector('.nav__toggle');


toogle.addEventListener('click', ()=>{

    nav.classList.toggle('active');
    toogle.classList.toggle('active');
})