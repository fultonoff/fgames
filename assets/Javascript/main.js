const nav = document.querySelector('.nav__list');
const toogle = document.querySelector('.nav__toggle');

function tog() {
  nav.classList.toggle('active');
  toogle.classList.toggle('active');
}

toogle.addEventListener('click', () => {
  tog();
});

var input = document.querySelector('.glide');

var glide = new Glide('.glide', {
  autoplay: 2000,
  hoverpause: false,
  perView: 1,
});

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: event.target.value != 0 ? event.target.value : false,
  });
});

glide.mount();

window.addEventListener('load', () => {
  setTimeout(() => {
    alt();
  }, 3000);
});

function alt() {
  alert(
    'FOR SOME REASON GOOGLE CHROME DOESNT OPEN THE DOWNLOAD PAGE, PLEASE CHOOSE A DIFFERENT BROWSER'
  );
}
