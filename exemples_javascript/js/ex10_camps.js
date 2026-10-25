// EXEMPLE 10 · Llegir camps de formulari i reaccionar en directe (esdeveniment input)

const MAXIM = 80;
const frase = document.querySelector("#frase");
const comptador = document.querySelector("#comptador-frase");

function actualitzaComptador() {
  const escrits = frase.value.length;          // .value és el text del camp; .length, el nombre de caràcters
  comptador.textContent = escrits + " / " + MAXIM + " caràcters";
  // classList.toggle(classe, condició): afegeix la classe si la condició és certa, i la treu si no
  comptador.classList.toggle("aviso", escrits > MAXIM - 10);
  comptador.classList.toggle("excedit", escrits > MAXIM);
}

// "input" salta cada vegada que l'usuari escriu, esborra o enganxa text
frase.addEventListener("input", actualitzaComptador);
actualitzaComptador();

// Altres tipus de camps
const color = document.querySelector("#color");
const majorEdat = document.querySelector("#major");
const edat = document.querySelector("#edat");

color.addEventListener("change", () => {          // "change" salta quan l'usuari acaba de triar
  escriu("Color triat: " + color.value);
});
majorEdat.addEventListener("change", () => {
  escriu("Casella marcada? " + majorEdat.checked);   // les caselles tenen .checked (true o false)
});
edat.addEventListener("input", () => {
  // .value SEMPRE és un text, encara que el camp sigui type="number"
  const numero = Number(edat.value);
  escriu("Edat: " + JSON.stringify(edat.value) + " -> com a número: " + numero + " (és NaN? " + isNaN(numero) + ")");
});

// PROVA-HO:
// 1. Canvia MAXIM a 40 i comprova els avisos.
// 2. Fes que, quan el color sigui "vermell", el títol de la pàgina es posi vermell (afegint una classe, no style).
