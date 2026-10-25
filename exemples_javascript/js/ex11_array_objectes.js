// EXEMPLE 11 · Un array d'objectes i el DOM: pintar targetes amb un bucle
// (Tema: una llibreria. A la teva pràctica faràs el mateix amb els jocs de la botiga.)

// 1. Les DADES: un array on cada element és un objecte amb les mateixes propietats
const llibres = [
  { titol: "El Quixot", autor: "Miguel de Cervantes", preu: 18.5, estoc: 12 },
  { titol: "Solitud", autor: "Víctor Català", preu: 14, estoc: 3 },
  { titol: "La plaça del Diamant", autor: "Mercè Rodoreda", preu: 12.9, estoc: 0 },
  { titol: "Tirant lo Blanc", autor: "Joanot Martorell", preu: 21.75, estoc: 7 },
];

const DESCOMPTE = 10; // percentatge

// 2. Una FUNCIÓ que fa un càlcul i retorna el resultat
function calculaPreuAmbDescompte(preu, descompte) {
  return preu - (preu * descompte) / 100;
}

// 3. Una FUNCIÓ que crea UNA targeta a partir d'UN objecte
function creaTargeta(llibre) {
  const targeta = document.createElement("article");

  const titol = document.createElement("h3");
  titol.textContent = llibre.titol;

  const autor = document.createElement("p");
  autor.textContent = llibre.autor;

  const preu = document.createElement("p");
  // toFixed(2) escriu el número amb 2 decimals
  preu.textContent = "Preu: " + calculaPreuAmbDescompte(llibre.preu, DESCOMPTE).toFixed(2) + " €";

  const estoc = document.createElement("p");
  if (llibre.estoc === 0) {
    estoc.textContent = "Esgotat";
    estoc.classList.add("estoc-baix");
  } else if (llibre.estoc < 5) {
    estoc.textContent = "Només en queden " + llibre.estoc;
    estoc.classList.add("estoc-baix");
  } else {
    estoc.textContent = "Estoc: " + llibre.estoc;
  }

  targeta.append(titol, autor, preu, estoc);   // append() permet afegir diversos elements d'un cop
  return targeta;
}

// 4. Un BUCLE que recorre l'array i afegeix cada targeta al contenidor (que a l'HTML està buit)
const contenidor = document.querySelector("#cataleg");
for (const llibre of llibres) {
  contenidor.appendChild(creaTargeta(llibre));
}

// PROVA-HO:
// 1. Afegeix un cinquè llibre a l'array: la pàgina l'ha de mostrar sense tocar l'HTML.
// 2. Afegeix la propietat "pagines" als objectes i mostra-la a la targeta.
// 3. Canvia el límit d'estoc baix de 5 a 10.
