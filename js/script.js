let div = document.querySelector(".crt");

const $dias = document.getElementById("dias"),
  $horas = document.getElementById("horas"),
  $minutos = document.getElementById("minutos"),
  $segundos = document.getElementById("segundos");

const fecha = new Date("11 01, 2023 08:00 am").getTime();
// const nuevaFecha = new Date("01 16, 2023").getDate();

let intervalo = setInterval(() => {
  //Obtener fecha actual y milisegundos
  const ahora = new Date().getTime();

  //Obtener las distancias entre ambas fechas
  let distancia = fecha - ahora;

  //Calculos a dias-horas-minutos-segundos
  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  //Escribimos resultados
  $dias.innerHTML = dias;
  $horas.innerHTML = horas;
  $minutos.innerHTML = minutos;
  $segundos.innerHTML = ("0" + segundos).slice(-2);

  if (distancia < 0) {
    clearInterval(intervalo);
    $dias.innerHTML = 0;
    $horas.innerHTML = 0;
    $minutos.innerHTML = 0;
    $segundos.innerHTML = 0;
    // p.innerHTML = `<p class="legend">Las prematriculas cerraran en: </p>`
    // $finalMessage.style.transform = 'translateY(0)';
    document.title =
      "2024 Esperanzas Victoriosas - Prematriculas Abiertas 2024.";
    div.innerHTML = `<h2 class='deepshadow'>Prematrículas abiertas.</h2>`;
    // b.textContent = "Inscripción de Componentes";
    // b.disabled = true;
    n.disabled = false;
    document.querySelector(
      ".pie"
    ).innerHTML = `<div class = "text ">
        <!-- 
        ** Haz cada cosa en la vida como si fuera lo último que hagas. **   - Marco Aurelio 
        -->
        <p class = legend style="margin:0px; text-align:center;">
            <img src='../assets/lema-2024-unan-leon.-movil.png' style="width:350px;">
        </p>
        </div>`;
    // document.querySelector(".contenedor-d").classList.add("aux");
    // document.querySelector(".aux").classList.remove("contenedor-d");
  }
}, 300);
