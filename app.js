const brojaci = document.querySelectorAll(".count");
const brzina = 200;

brojaci.forEach((brojac) => {
  const updateCount = () => {
    const target = parseInt(+brojac.getAttribute("data-target"));
    const broj = parseInt(+brojac.innerText);
    const povecaj = Math.trunc(target / brzina);

    if (broj < target) {
      brojac.innerText = broj + povecaj;
      setTimeout(updateCount, 1);
    } else {
      broj.innerText = target;
    }
  };
  updateCount();
});

var datum = new Date("Feb 10, 2024 15:35").getTime();
var x = setInterval(function () {
  var sad = new Date().getTime();
  var razlika = datum - sad;
  var dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
  var sati = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuti = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
  var sekunde = Math.floor((razlika % (1000 * 60)) / 1000);
  if (dani != 0) {
    document.getElementById("vreme").innerHTML =
      dani + "д " + sati + "ч " + minuti + "м " + sekunde + "с ";
  } else {
    document.getElementById("vreme").innerHTML =
      sati + "ч " + minuti + "м " + sekunde + "с ";
  }
  if (razlika < 0) {
    clearInterval(x);
    document.getElementById("vreme").innerHTML = "JUPI";
  }
}, 1000);

document.getElementById("prijava").addEventListener("click", function () {
  window.location.replace("prijava.html");
});
