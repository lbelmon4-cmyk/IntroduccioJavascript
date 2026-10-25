// EXEMPLE 12 · Cerca i filtre en directe amb callbacks
// (Tema: ciutats. És el mateix patró que usaràs al catàleg: filtrar l'array i tornar a pintar.)

const ciutats = [
  { nom: "Barcelona", comarca: "Barcelonès", habitants: 1636000 },
  { nom: "Badalona", comarca: "Barcelonès", habitants: 223000 },
  { nom: "Girona", comarca: "Gironès", habitants: 104000 },
  { nom: "Sabadell", comarca: "Vallès Occidental", habitants: 217000 },
  { nom: "Terrassa", comarca: "Vallès Occidental", habitants: 224000 },
  { nom: "Lleida", comarca: "Segrià", habitants: 140000 },
  { nom: "Tarragona", comarca: "Tarragonès", habitants: 135000 },
  { nom: "Reus", comarca: "Baix Camp", habitants: 107000 },
];

const cerca = document.querySelector("#cerca");
const filtreComarca = document.querySelector("#comarca");
const llista = document.querySelector("#resultat");
const estat = document.querySelector("#estat");

// Pinta una llista de ciutats (esborra el que hi havia abans i torna a crear-ho)
function pinta(llistaCiutats) {
  llista.innerHTML = "";                              // buidem el contenidor
  llistaCiutats.forEach((ciutat) => {                 // forEach rep un callback: s'executa per cada element
    const li = document.createElement("li");
    li.textContent = ciutat.nom + " (" + ciutat.comarca + ") · " + ciutat.habitants.toLocaleString("ca") + " habitants";
    llista.appendChild(li);
  });
  estat.textContent = "Mostrant " + llistaCiutats.length + " de " + ciutats.length + " ciutats";
  if (llistaCiutats.length === 0) {
    const missatge = document.createElement("li");
    missatge.textContent = "No s'ha trobat cap ciutat";
    llista.appendChild(missatge);
  }
}

// Aplica LA CERCA I EL FILTRE alhora, i després pinta el resultat
function aplica() {
  const text = cerca.value.trim().toLowerCase();     // minúscules: la cerca no distingeix majúscules
  const comarca = filtreComarca.value;               // "" vol dir "Totes"

  // filter() rep un callback (una arrow function) que retorna true per als elements que volem conservar
  const resultat = ciutats.filter((ciutat) => {
    const coincideixNom = ciutat.nom.toLowerCase().includes(text);
    const coincideixComarca = comarca === "" || ciutat.comarca === comarca;
    return coincideixNom && coincideixComarca;
  });

  pinta(resultat);
}

cerca.addEventListener("input", aplica);
filtreComarca.addEventListener("change", aplica);
aplica();                                            // primer pintat, sense filtres

// PROVA-HO:
// 1. Afegeix un botó que ordeni el resultat per habitants: resultat.sort((a, b) => a.habitants - b.habitants).
// 2. Que el filtre també tingui en compte un mínim d'habitants (nou camp number).
