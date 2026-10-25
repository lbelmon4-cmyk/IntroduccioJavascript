// EXEMPLE 05 · == (coerció) contra === (estricte)

// Cada parella: [valor A, valor B]
const parelles = [
  [5, "5"],
  [0, false],
  ["", 0],
  [null, undefined],
  [1, 1],
  ["hola", "hola"],
];

for (let i = 0; i < parelles.length; i++) {
  const a = parelles[i][0];
  const b = parelles[i][1];
  // JSON.stringify serveix perquè es vegin les cometes dels textos
  const parella = JSON.stringify(a) + " i " + JSON.stringify(b);
  escriu(parella.padEnd(22) + " ==  " + String(a == b).padEnd(6) + " ===  " + (a === b));
}

// Un cas habitual: el valor d'un camp de formulari SEMPRE és un text
const valor = "18"; // el que retornaria camp.value
escriu("");
escriu('valor = "18"');
escriu("valor == 18   -> " + (valor == 18));
escriu("valor === 18  -> " + (valor === 18));
escriu("Number(valor) === 18 -> " + (Number(valor) === 18) + "  (primer convertim, després comparem)");

// PROVA-HO:
// Afegeix la parella [NaN, NaN] i la parella ["10", 10]. Què passa?
