const nav = document.querySelector('.nav__list');
const toogle = document.querySelector('.nav__toggle');


toogle.addEventListener('click', ()=>{

    nav.classList.toggle('active');
    toogle.classList.toggle('active');
})


var input = document.querySelector('.glide')

var glide = new Glide('.glide', {
  autoplay: 2000,
  hoverpause: false,
  perView: 1
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()