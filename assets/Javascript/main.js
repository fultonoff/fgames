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


var select = document.querySelector('.glide-2')

var glide = new Glide('.glide-2', {
  type: select.value,
  focusAt: 'center',
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    type: event.target.value
  })
})

glide.mount()