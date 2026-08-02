const frases = [

"Hoy muchas personas regalan flores.",

"Yo también quería hacerlo...",

"...pero quería darte unas que nunca se marchiten."

];


let i = 0;


const mensaje = document.getElementById("mensaje");

const primeraPantalla = document.getElementById("primeraPantalla");



const intervalo = setInterval(()=>{


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


document.getElementById("modalNombre").style.display="flex";


}





function descubrir(){


let nombre = document.getElementById("nombreKai").value.toLowerCase();



if(nombre.includes("kai") || nombre.includes("kairella")){


document.getElementById("modalNombre").style.display="none";


document.getElementById("final").style.display="flex";


let texto = 
"Siempre habrá flores para ti.\n\n"+
"Después...\n\n"+
"De una u otra forma...\n\n"+
"compradas,\n\n"+
"hechas a mano,\n\n"+
"improvisadas,\n\n"+
"o incluso programadas...\n\n"+
"🌹 Mientras pueda, siempre encontraré una forma de hacerte llegar una flor.";



let posicion = 0;



setTimeout(()=>{


let escribir = setInterval(()=>{


document.getElementById("mensajeFinal").innerHTML += texto[posicion];


posicion++;


if(posicion >= texto.length){

clearInterval(escribir);

}


},120);



},2500);



}else{


alert("Creo que esa flor era para alguien especial ❤️");


}



}
