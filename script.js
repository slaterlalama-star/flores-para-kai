const frases = [
"Hoy muchas personas regalan flores.",
"Yo también quería hacerlo...",
"...pero quería darte unas que nunca se marchiten."
];


let i = 0;

const mensaje = document.getElementById("mensaje");
const primeraPantalla = document.getElementById("primeraPantalla");


let intervalo = setInterval(()=>{

i++;

if(i < frases.length){

mensaje.style.opacity = 0;

setTimeout(()=>{
mensaje.innerHTML = frases[i];
mensaje.style.opacity = 1;
},1500);


}else{

clearInterval(intervalo);

mensaje.style.opacity = 0;

setTimeout(()=>{

mensaje.style.display="none";

primeraPantalla.classList.remove("oculto");

},2000);

}

},6000);





function abrirNombre(){

document.getElementById("modalNombre").classList.remove("oculto");

document.getElementById("modalNombre").style.display="flex";

}





function descubrir(){

let nombre = document.getElementById("nombreKai").value.toLowerCase();


if(nombre.includes("kai") || nombre.includes("kairella")){


document.getElementById("modalNombre").classList.add("oculto");


let final = document.getElementById("final");

final.classList.remove("oculto");



let texto = 
"Siempre habrá flores para ti.\n\n"+
"De una u otra forma...\n\n"+
"compradas,\n\n"+
"hechas a mano,\n\n"+
"improvisadas,\n\n"+
"o incluso programadas...\n\n"+
"🌹 Mientras pueda, siempre encontraré una forma de hacerte llegar una flor.";



let mensajeFinal = document.getElementById("mensajeFinal");

mensajeFinal.innerHTML="";

let posicion = 0;



setTimeout(()=>{

let escribir = setInterval(()=>{


mensajeFinal.innerHTML += texto.charAt(posicion);

posicion++;


if(posicion >= texto.length){

clearInterval(escribir);

activarSecretos();

}


},100);


},2500);



}else{

alert("Creo que esa flor era para alguien especial ❤️");

}

}





// ===============================
// EASTER EGGS 🌹
// SISTEMA GENERAL
// ===============================



function activarSecretos(){


const rosa = document.querySelector(".rosa");

let clicksRosa = 0;



rosa.addEventListener("click",()=>{


clicksRosa++;


if(clicksRosa === 5){


mostrarSecreto(`

🌹 Pensaste que era una flor normal...

pero tenía un mensaje escondido ❤️


No prometo un mundo perfecto,

ni un camino sin dolor,

pero sí caminar contigo

con respeto y amor.


Cuidarte en los pequeños días,

hacerte sonreír sin razón,

llenarte de abrazos,

y darte siempre mi corazón.


No corramos detrás del mañana,

disfrutemos lo que Dios nos da,

porque mientras estemos juntos,

cada día algo bonito será. 🤍


`);

}


});





crearRosaSecreta();



// AQUÍ AGREGAMOS NUEVOS EGGS

crearEggPalabra(
"hechas a mano",
`

🤍 Pensaste que solo hablaba de flores...


Pero hay algo más detrás de estas manos.


Manos que quieren crear momentos,

dibujar sonrisas en tus días,

guardar abrazos para siempre,

y convertir pequeños instantes

en recuerdos llenos de amor.


Manos que quieren cuidarte,

protegerte,

sostenerte cuando lo necesites.


Porque no quiero solamente regalarte flores...


Quiero crear contigo historias bonitas,

llenar tus días de cariño,

y demostrarte amor con detalles.


Y sí...

quiero que mis manos aprendan

la forma de hacerte sentir amada:

con abrazos,

con ternura,

con caricias,

y con ese amor que se demuestra

más allá de las palabras. 🌹

`,
3
);



crearEggPalabra(
"improvisadas",
`

🌹 Pensaste que era una palabra más...


Pero hay momentos que no necesitan un plan.


Una sonrisa inesperada,

un abrazo sin motivo,

una conversación que se alarga,

un recuerdo que nace sin avisar.


El amor que quiero darte no es improvisado,

porque mis sentimientos son reales.


Pero sí quiero improvisar contigo

cada día que Dios nos permita.


Crear momentos únicos,

reírnos de cosas simples,

sorprendernos,

y caminar juntos.


Y si improvisamos cada día juntos,

confiando en Dios...

quizá descubramos que los mejores recuerdos

son los que nunca planeamos.


Que cada abrazo inesperado,

cada caricia llena de amor,

y cada beso nacido del momento...

valga por dos. 🤍

`,
3
);



}





// FUNCIÓN PARA CREAR CUALQUIER EASTER EGG

function crearEggPalabra(palabra, mensaje, cantidadClicks){


let contenedor = document.getElementById("mensajeFinal");


let contenido = contenedor.innerHTML;



if(contenido.includes(palabra)){


let id = "egg_" + palabra.replaceAll(" ","_");


contenedor.innerHTML = contenido.replace(

palabra,

`<span id="${id}">${palabra}</span>`

);



let elemento = document.getElementById(id);


elemento.style.cursor="pointer";

elemento.style.fontWeight="bold";


let clicks = 0;


elemento.addEventListener("click",()=>{


clicks++;


if(clicks === cantidadClicks){


mostrarSecreto(mensaje);


}


});


}


}






function crearRosaSecreta(){


let rosaPequena = document.createElement("div");


rosaPequena.innerHTML="🌹";

rosaPequena.style.position="absolute";

rosaPequena.style.bottom="40px";

rosaPequena.style.left="40px";

rosaPequena.style.fontSize="35px";

rosaPequena.style.cursor="pointer";

rosaPequena.title="Un secreto";


document.getElementById("final").appendChild(rosaPequena);



rosaPequena.addEventListener("click",()=>{


mostrarSecreto(`

Si llegaste hasta aquí...

significa que eres curiosa JAJA 🤍


Te ganaste un abrazo,

un beso

y un momento conmigo.


Eres alguien especial para mí 🌹

`);

});


}







function mostrarSecreto(texto){


let secreto = document.createElement("div");


secreto.innerHTML = texto;


secreto.style.position="fixed";

secreto.style.top="50%";

secreto.style.left="50%";

secreto.style.transform="translate(-50%, -50%)";

secreto.style.background="rgba(0,0,0,0.95)";

secreto.style.color="white";

secreto.style.padding="30px";

secreto.style.borderRadius="20px";

secreto.style.maxWidth="85%";

secreto.style.textAlign="center";

secreto.style.fontSize="1.2rem";

secreto.style.lineHeight="1.8";

secreto.style.zIndex="999";



document.body.appendChild(secreto);



secreto.addEventListener("click",()=>{

secreto.remove();

});


}
