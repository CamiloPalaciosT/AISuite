/*----menu inicial----*/
const menuToogle= document.querySelector('.menuToogle')
const navegacion = document.querySelector('.navegacion')

menuToogle.onclick =function(){
    navegacion.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click', activarLink)
)

// textos ocultos en el tercer div  //
texto1.style.display = "none"
texto2.style.display = "none"
texto3.style.display = "none"
texto4.style.display = "none"

var titulo1 = document.getElementById("titulo1");
titulo1.addEventListener("click", function(event) {
  var texto1 = document.getElementById("texto1");
  var flechita = event.target.querySelector('.flechita');
  if (texto1.style.display === "none") {
    texto1.style.display = "block";
    titulo2.style.display = "none";
    titulo3.style.display = "none";
    titulo4.style.display = "none";
  } else {
    texto1.style.display = "none";
    titulo2.style.display = "block";
    titulo3.style.display = "block";
    titulo4.style.display = "block";
  }
});
var titulo3 = document.getElementById("titulo2");
titulo3.addEventListener("click", function(event) {
  var texto1 = document.getElementById("texto1");
  var texto2 = document.getElementById("texto2");
  var texto3 = document.getElementById("texto3");
  var texto4 = document.getElementById("texto4");
  if (texto2.style.display === "none") {
    texto2.style.display = "block";
    titulo1.style.display = "none";
    titulo3.style.display = "none";
    titulo4.style.display = "none";
  } else {
    texto2.style.display = "none";
    titulo1.style.display = "block";
    titulo3.style.display = "block";
    titulo4.style.display = "block";
  }
});
var titulo3 = document.getElementById("titulo3");
titulo3.addEventListener("click", function(event) {
  var texto1 = document.getElementById("texto1");
  var texto2 = document.getElementById("texto2");
  var texto3 = document.getElementById("texto3");
  var texto4 = document.getElementById("texto4");
  if (texto3.style.display === "none") {
    texto3.style.display = "block";
    titulo1.style.display = "none";
    titulo2.style.display = "none";
    titulo4.style.display = "none";
  } else {
    texto3.style.display = "none";
    titulo1.style.display = "block";
    titulo2.style.display = "block";
    titulo4.style.display = "block";
  }
});

var titulo4 = document.getElementById("titulo4");
titulo4.addEventListener("click", function(event) {
  var texto1 = document.getElementById("texto1");
  var texto2 = document.getElementById("texto2");
  var texto3 = document.getElementById("texto3");
  var texto4 = document.getElementById("texto4");
  if (texto4.style.display === "none") {
    texto4.style.display = "block";
    titulo1.style.display = "none";
    titulo2.style.display = "none";
    titulo3.style.display = "none";
  } else {
    texto4.style.display = "none";
    titulo1.style.display = "block";
    titulo2.style.display = "block";
    titulo3.style.display = "block";
  }
});
var currentSlide = 1;

/*------ carrusel-------*/
window.addEventListener('load',function(){
  document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
      console.log('Slide Hidden %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-refresh', function(event){
      console.log('Refresh')
  });
  document.querySelector('.glider').addEventListener('glider-loaded', function(event){
      console.log('Loaded')
  });

  window._ = new Glider(document.querySelector('.glider'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });
});


/*------automatizacion de carrusel ------*/
const button = document.querySelector('.glider-next');
function clickButton() {
  button.click();
}
setInterval(clickButton, 3000);