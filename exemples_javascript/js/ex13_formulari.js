// EXEMPLE 13 · Validar un formulari amb JavaScript
// (Tema: alta al club de lectura. Els camps i les regles són diferents dels de la teva pràctica,
//  però la tècnica és exactament la mateixa.)

const formulari = document.querySelector("#alta");
const resum = document.querySelector("#resum");

// --- Funcions d'ajuda per mostrar i treure errors ---

// Crea un missatge d'error sota el camp (i marca el camp amb la classe "error")
function mostraError(camp, text) {
  camp.classList.add("error");
  const missatge = document.createElement("p");
  missatge.classList.add("missatge-error");
  missatge.textContent = text;
  camp.insertAdjacentElement("afterend", missatge);   // el posa just DESPRÉS del camp
}

// Elimina TOTS els errors anteriors (així no s'acumulen ni es repeteixen)
function netejaErrors() {
  for (const missatge of document.querySelectorAll(".missatge-error")) {
    missatge.remove();
  }
  for (const camp of document.querySelectorAll(".error")) {
    camp.classList.remove("error");
  }
}

// --- Validació: retorna true si tot és correcte ---
function valida() {
  const nom = document.querySelector("#nom");
  const correu = document.querySelector("#correu");
  const edat = document.querySelector("#edat");
  const genere = document.querySelector("#genere");
  let correcte = true;

  netejaErrors();

  // Text: obligatori i mínim 3 caràcters (sense comptar els espais de les puntes)
  if (nom.value.trim().length < 3) {
    mostraError(nom, "El nom ha de tenir com a mínim 3 caràcters.");
    correcte = false;
  }

  // Correu: ha de tenir una @ i, després de la @, un punt
  const valorCorreu = correu.value.trim();
  const posicioArrova = valorCorreu.indexOf("@");
  if (posicioArrova < 1 || !valorCorreu.includes(".", posicioArrova)) {
    mostraError(correu, "Escriu un correu vàlid (per exemple, nom@exemple.cat).");
    correcte = false;
  }

  // Número: .value és text → el convertim amb Number() i comprovem que sigui un número dins del rang
  const numeroEdat = Number(edat.value);
  if (edat.value === "" || isNaN(numeroEdat) || numeroEdat < 12 || numeroEdat > 120) {
    mostraError(edat, "L'edat ha de ser un número entre 12 i 120.");
    correcte = false;
  }

  // Select: la primera opció (value="") és el "Tria una opció"
  if (genere.value === "") {
    mostraError(genere, "Tria un gènere preferit.");
    correcte = false;
  }

  return correcte;
}

// --- Enviament ---
formulari.addEventListener("submit", (event) => {
  event.preventDefault();                 // l'enviament el controlem nosaltres: la pàgina no es recarrega

  if (!valida()) {
    return;                               // hi ha errors: aturem aquí
  }

  // Tot correcte: construïm un resum amb el DOM (substituint l'anterior si n'hi havia)
  resum.innerHTML = "";
  const titol = document.createElement("h3");
  titol.textContent = "Gràcies, " + document.querySelector("#nom").value.trim() + "!";
  const detall = document.createElement("p");
  detall.textContent =
    "Correu: " + document.querySelector("#correu").value.trim() +
    " · Edat: " + document.querySelector("#edat").value +
    " · Gènere preferit: " + document.querySelector("#genere").value;
  resum.append(titol, detall);
  resum.classList.add("resum-confirmacio");

  formulari.reset();                      // buida el formulari
});

// PROVA-HO:
// 1. Envia el formulari buit, després correctament, i després buit un altre cop. Quins canvis veus?
// 2. Afegeix un camp "Contrasenya" (type="password") que exigeixi mínim 8 caràcters.
// 3. Fes que l'error d'un camp desaparegui en el moment d'escriure-hi (esdeveniment input).
