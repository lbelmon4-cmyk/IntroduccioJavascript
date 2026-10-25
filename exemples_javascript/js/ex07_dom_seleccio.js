// EXEMPLE 07 · Seleccionar elements del DOM

// Cada mètode retorna una cosa diferent:
const titol = document.getElementById("titol");                 // UN element (per id)
const notes = document.getElementsByClassName("nota");          // col·lecció de TOTS els que tenen la classe
const primera = document.querySelector(".nota");                // el PRIMER que coincideix amb el selector CSS
const totes = document.querySelectorAll(".nota");               // TOTS els que coincideixen amb el selector CSS
const elements = document.querySelectorAll("#llista li");       // els selectors són els mateixos que al CSS

escriu("getElementById('titol')      -> " + titol.textContent);
escriu("getElementsByClassName       -> " + notes.length + " elements");
escriu("querySelector('.nota')       -> " + primera.textContent);
escriu("querySelectorAll('.nota')    -> " + totes.length + " elements");
escriu("querySelectorAll('#llista li') -> " + elements.length + " elements");

// Una funció que treu el ressaltat de tot i després ressalta el que li diguem
function ressalta(seleccio) {
  const marcats = document.querySelectorAll(".ressaltat");
  for (const element of marcats) {
    element.classList.remove("ressaltat");
  }
  // seleccio pot ser un element sol o una llista: ho tractem com a llista
  if (seleccio instanceof Element) {
    seleccio.classList.add("ressaltat");
  } else {
    for (const element of seleccio) {
      element.classList.add("ressaltat");
    }
  }
}

document.querySelector("#btn-id").addEventListener("click", () => ressalta(titol));
document.querySelector("#btn-primera").addEventListener("click", () => ressalta(primera));
document.querySelector("#btn-totes").addEventListener("click", () => ressalta(totes));
document.querySelector("#btn-llista").addEventListener("click", () => ressalta(elements));

// Llegir i canviar atributs
const enllac = document.querySelector("#enllac");
escriu("");
escriu("href abans: " + enllac.getAttribute("href"));
document.querySelector("#btn-href").addEventListener("click", () => {
  enllac.setAttribute("href", "https://developer.mozilla.org/");
  enllac.textContent = "Ara porto a MDN";
  escriu("href després: " + enllac.getAttribute("href"));
});

// PROVA-HO:
// 1. Afegeix un botó que ressalti només els <li> de la classe "important" (usa un selector CSS: "li.important").
// 2. Què retorna document.querySelector(".no-existeix")? Mostra-ho amb escriu().
