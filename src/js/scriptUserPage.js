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
// chatGPT
const btnAgregarCodigo = document.getElementById("btnAgregarCodigo");
const contenedorCodigo = document.getElementById("contenedorCodigo");
const ContadorChatGPT = document.getElementById("contadorChatGPT");
let contador = 0;
function agregarCodigoHTML() {
contador ++;
const codigoHTML = '<div class="scene"><div class="cube"><span class="side top">' +'chat No.'+  contador  + '</span><span class="side front">' +'chat No.'+  contador  + '</span></div></div>';
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
const codigoHTMLDos = '<div class="scene"><div class="cube"><span class="side top">' +'chat No.'+  contadorDos  + '</span><span class="side front">' +'chat No.'+  contadorDos  + '</span></div></div>';
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
const codigoHTMLTres = '<div class="scene"><div class="cube"><span class="side top">' +'chat No.'+  contadorTres  + '</span><span class="side front">' +'chat No.'+  contadorTres  + '</span></div></div>';
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
const codigoHTMLCuatro = '<div class="scene"><div class="cube"><span class="side top">' +'chat No.'+  contadorCuatro  + '</span><span class="side front">' +'chat No.'+  contadorCuatro  + '</span></div></div>';
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
const codigoHTMLCinco = '<div class="scene"><div class="cube"><span class="side top">' +'chat No.'+  contadorCinco  + '</span><span class="side front">' +'chat No.'+  contadorCinco  + '</span></div></div>';
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
