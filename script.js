const frases = [
  "Hoy muchas personas regalan flores.",
  "Yo también quería hacerlo...",
  "...pero quería darte unas que nunca se marchiten."
];

let i = 0;

const mensaje = document.getElementById("mensaje");
const final = document.getElementById("final");

const intervalo = setInterval(() => {

    i++;

    if(i < frases.length){

        mensaje.style.opacity = 0;

        setTimeout(()=>{

            mensaje.innerHTML = frases[i];
            mensaje.style.opacity = 1;

        },700);

    }else{

        clearInterval(intervalo);

        mensaje.style.opacity = 0;

        setTimeout(()=>{

            mensaje.style.display="none";
            final.style.display="block";

        },1000);

    }

},3500);
