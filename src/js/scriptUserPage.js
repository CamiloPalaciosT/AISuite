//mensaje del chat
const respuestaChat = `Lo siento aun no puedo entenderte, me encuentro en fase Beta. `
/*----menu inicial----*/
const menuToogle= document.querySelector('.menuToogle')
const navegacion = document.querySelector('.navegacion')

menuToogle.onclick =function(){
    navegacion.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.toggle('active'))
}
list.forEach((item)=>
item.addEventListener('click', activarLink)
)
/*------clase activa-----*/
var claseChat = document.querySelectorAll('.claseChat');
function activarLink(event) {
    var boton = event.currentTarget;
    boton.classList.toggle('active');
}
claseChat.forEach(function(item) {
    item.addEventListener('click', activarLink);
});
// funcion para cambiar el color a la web
var colorOriginalClaseChat = "#f5790562";
var colorOscuroClaseChat = "#15F5E8";

function cambiarColor() {
  var elementos = document.getElementsByClassName('claseChat');
  
  for (var i = 0; i < elementos.length; i++) {
    if (window.getComputedStyle(elementos[i]).getPropertyValue("background-color") === colorOriginalClaseChat) {
      elementos[i].style.backgroundColor = colorOscuroClaseChat;
    } else {
      elementos[i].style.backgroundColor = colorOriginalClaseChat;
    }
  }
}

// chatGPT
const btnAgregarCodigo = document.getElementById("btnAgregarCodigo");
const contenedorCodigo = document.getElementById("contenedorCodigo");
const ContadorChatGPT = document.getElementById("contadorChatGPT");
let contador = 0;
function agregarCodigoHTML() {
contador ++;
const codigoHTML = '<div class="scene"><div class="cube"><span class="side top">' +'Chat '+  contador  + '</span><span class="side front">' +'Chat '+  contador  + '</span></div></div>';
contenedorCodigo.innerHTML += codigoHTML;
ContadorChatGPT.innerHTML = contador + " chats";
}
btnAgregarCodigo.addEventListener("click", agregarCodigoHTML);
//BARD
const btnAgregarCodigoDos = document.getElementById("btnAgregarCodigoDos");
const contenedorCodigoDos = document.getElementById("contenedorCodigoDos");
const contadorBard = document.getElementById("contadorBard");
let contadorDos = 0;
function agregarCodigoHTMLDos() {
contadorDos ++;
const codigoHTMLDos = '<div class="scene"><div class="cube"><span class="side top">' +'Chat '+  contadorDos  + '</span><span class="side front">' +'Chat '+  contadorDos  + '</span></div></div>';
contenedorCodigoDos.innerHTML += codigoHTMLDos;
contadorBard.innerHTML = contadorDos + " chats";
}
btnAgregarCodigoDos.addEventListener("click", agregarCodigoHTMLDos);
//AIChat
const btnAgregarCodigoTres = document.getElementById("btnAgregarCodigoTres");
const contenedorCodigoTres = document.getElementById("contenedorCodigoTres");
const contadorAIChat = document.getElementById("contadorAIChat");
let contadorTres = 0;
function agregarCodigoHTMLTres() {
contadorTres ++;
const codigoHTMLTres = '<div class="scene"><div class="cube"><span class="side top">' +'Chat '+  contadorTres  + '</span><span class="side front">' +'Chat '+  contadorTres  + '</span></div></div>';
contenedorCodigoTres.innerHTML += codigoHTMLTres;
contadorAIChat.innerHTML = contadorTres + " chats";
}
btnAgregarCodigoTres.addEventListener("click", agregarCodigoHTMLTres);
//QuizCat
const btnAgregarCodigoCuatro = document.getElementById("btnAgregarCodigoCuatro");
const contenedorCodigoCuatro = document.getElementById("contenedorCodigoCuatro");
const contadorQuizCat = document.getElementById("contadorQuizCat");
let contadorCuatro = 0;
function agregarCodigoHTMLCuatro() {
contadorCuatro ++;
const codigoHTMLCuatro = '<div class="scene"><div class="cube"><span class="side top">' +'Chat '+  contadorCuatro  + '</span><span class="side front">' +'Chat '+  contadorCuatro  + '</span></div></div>';
contenedorCodigoCuatro.innerHTML += codigoHTMLCuatro;
contadorQuizCat.innerHTML = contadorCuatro + " chats";
}
btnAgregarCodigoCuatro.addEventListener("click", agregarCodigoHTMLCuatro);
//Silky
const btnAgregarCodigoCinco = document.getElementById("btnAgregarCodigoCinco");
const contenedorCodigoCinco = document.getElementById("contenedorCodigoCinco");
const contadorSilky = document.getElementById("contadorSilky");
let contadorCinco = 0;
function agregarCodigoHTMLCinco() {
contadorCinco ++;
const codigoHTMLCinco = '<div class="scene"><div class="cube"><span class="side top">' +'Chat'+  contadorCinco  + '</span><span class="side front">' +'Chat '+  contadorCinco  + '</span></div></div>';
contenedorCodigoCinco.innerHTML += codigoHTMLCinco;
contadorSilky.innerHTML = contadorCinco + " chats";
}
btnAgregarCodigoCinco.addEventListener("click", agregarCodigoHTMLCinco);
//respuesta de chatGPT
const zonaChat = document.getElementsByClassName("zonaChat")[0];
function enviarMensaje() {
    var mensaje = document.getElementById("mensajeInput").value;
    procesarMensaje(mensaje);
    document.getElementById("mensajeInput").value = "";
}
function procesarMensaje(mensaje) {
    zonaChat.innerHTML += 
    `<div class="contenedorResultadoUsuario">
        <div id="resultadoChat">
            <div class="cuadroResultadoUsuario">` 
                + mensaje +
            `</div>
        </div>
    </div>
    <div class="contenedorResultadoChat">
        <div id="resultadoChat">
            <div class="cuadroResultadoChat">`
                + respuestaChat +
            `</div>
        </div>
    </div>`;
    console.log("Mensaje recibido: " + mensaje);
    zonaChat.scrollTop = zonaChat.scrollHeight;
}
/*------Enviar con Enter -----*/
var mensajeInput = document.getElementById("mensajeInput");

mensajeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
    enviarMensaje();
    }
});
/*----menu Switch----*/
function mostarMenu() {
    var columnaChatDisponibles = document.querySelector('.columnaChatDisponibles');
    columnaChatDisponibles.classList.toggle('open');
  }
// Función para cambiar el texto del botón a través de JavaScript
function changeButtonText() {
    var button1 = document.getElementById("btnAgregarCodigo");
    var button2 = document.getElementById("btnAgregarCodigoDos");
    var button3 = document.getElementById("btnAgregarCodigoTres");
    var button4 = document.getElementById("btnAgregarCodigoCuatro");
    var button5 = document.getElementById("btnAgregarCodigoCinco");
    var anchoChat = document.getElementById("anchoChat")
    
    if (button1) {
      button1.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
    }
    
    if (button2) {
      button2.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
    }
    
    if (button3) {
      button3.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
    }
    
    if (button4) {
      button4.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
    }
    
    if (button5) {
      button5.innerHTML = '<ion-icon name="person-add-outline"></ion-icon>';
    }
  }
  
  // Llamada a la función cuando se cumple el media query
  if (window.matchMedia("(max-width: 768px)").matches) {
    changeButtonText();
  }

  //redimension de ancho de columnas chat
  var columnaChatDisponibles = document.querySelector('.columnaChatDisponibles');
  var anchoChat = document.getElementById("anchoChat")

  function actualizarMargen() {
    if (columnaChatDisponibles.classList.contains('open')) {
      anchoChat.style.marginRight = '6%';
    } else {
      anchoChat.style.marginRight = '0%';
    }
  }
  actualizarMargen();
  var observer = new MutationObserver(actualizarMargen);
  observer.observe(columnaChatDisponibles, { attributes: true });
  columnaChatDisponibles.classList.add('open');
  columnaChatDisponibles.classList.remove('open');

