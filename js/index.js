// New



const $days = document.getElementById("days"),
  $hours = document.getElementById("hours"),
  $minutes = document.getElementById("minutes"),
  $seconds = document.getElementById("seconds");
// $finalMessage = document.querySelector('.final-sms');

var div = document.querySelector(".deepshadow");
var b = document.getElementById("n");
var p = document.querySelector(".legend");
b.disabled = false;

//Fecha a futuro
// const countdownDate = new Date('11 01, 2022 8:00 AM').getTime();
// Nueva instacia que prevee una fecha futura a cambiar el estado de la interfaz
const countdownDate = new Date("11 01, 2023 08:00 pm").getTime();

let interval = setInterval(function () {
  //Obtener fecha actual y milisegundos
  const now = new Date().getTime();

  //Obtener las distancias entre ambas fechas
  let distance = countdownDate - now;

  //Calculos a dias-horas-minutos-segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Escribimos resultados
  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML = minutes;
  $seconds.innerHTML = ("0" + seconds).slice(-2);

  //Cuando llegue a 0
  if (distance < 0) {
    clearInterval(interval);
    $days.innerHTML = 0;
    $hours.innerHTML = 0;
    $minutes.innerHTML = 0;
    $seconds.innerHTML = 0;
    // p.innerHTML = `<p class="legend">Las prematriculas cerraran en: </p>`
    // $finalMessage.style.transform = 'translateY(0)';
    // document.title = "Prematriculas 2023 Cerradas.";
    // div.innerHTML = `<h2 class='deepshadow'>Prematrículas cerradas.</h2>`;
    // b.textContent = "Resultados de Admisión 2023";
    // b.disabled = true;
    // document.querySelector(".alerta1").innerHTML = `<div class = "disappear">
    // <!-- 
    // ** Haz cada cosa en la vida como si fuera lo último que hagas. **   - Marco Aurelio 
    // -->
    // </div>`;
    document.querySelector(".contenedor-d").classList.add("aux");
    document.querySelector(".aux").classList.remove("contenedor-d");
  }
}, 300);
