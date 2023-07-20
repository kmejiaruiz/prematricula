"use strict";

let count = 10;
function clock() {
  document.querySelector(".counter").innerHTML = count;
  if (count <= 0 || count === 0) {
    window.location.href = "./main/";
    // alert("exito");
  } else {
    count -= 1;
    setTimeout(clock, 1e3);
  }
}
clock();
