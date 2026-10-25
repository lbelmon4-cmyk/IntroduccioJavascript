// EXEMPLE 02 · Variables: var, let i const

// --- var: àmbit de funció (evita-la en codi modern) ---
function provaVar() {
  if (true) {
    var a = 1;
  }
  escriu("var a fora del bloc: " + a); // funciona: var ignora els blocs {}
}
provaVar();

// --- let: àmbit de bloc ---
function provaLet() {
  if (true) {
    let b = 2;
  }
  try {
    escriu("let b fora del bloc: " + b);
  } catch (error) {
    escriu("let b fora del bloc dóna error: " + error.name); // ReferenceError
  }
}
provaLet();

// --- const: no es pot tornar a assignar ---
const PI = 3.1416;
try {
  PI = 3;
} catch (error) {
  escriu("const no es pot tornar a assignar: " + error.name); // TypeError
}

// --- però un array o un objecte const SÍ que es pot modificar (és mutable) ---
const llista = ["pa", "llet"];
llista.push("ous");
escriu("Array const modificat: " + llista.join(", "));

const persona = { nom: "Anna", edat: 17 };
persona.edat = 18;
escriu("Objecte const modificat: " + persona.nom + " té " + persona.edat + " anys");

try {
  persona = { nom: "Pere" }; // però no podem assignar-hi un altre objecte
} catch (error) {
  escriu("Assignar-hi un altre objecte: " + error.name); // TypeError
}

// --- identificadors vàlids ---
const nomUsuari = "anna"; // lletres
const $preu = 10;          // pot començar amb $
const _total = 0;          // o amb _
escriu("Identificadors vàlids: " + nomUsuari + ", " + $preu + ", " + _total);
// let 2noms = 1;  → error: no pot començar amb un número
// let for = 5;    → error: for és una paraula reservada

// PROVA-HO:
// 1. Descomenta les dues línies amb error i mira què diu la consola.
// 2. Canvia llista.push("ous") per llista = [] i mira l'error.
