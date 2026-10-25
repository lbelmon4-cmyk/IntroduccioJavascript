// EXEMPLE 03 · Hoisting (elevació)
// JavaScript "puja" les declaracions a l'inici del seu context abans d'executar el codi.

// var: es puja la declaració, però NO el valor
escriu("a abans de declarar-la: " + a); // undefined (no dóna error)
var a = 5;
escriu("a després de donar-li valor: " + a);

// let i const: no es poden fer servir abans de declarar-les
try {
  escriu("b abans de declarar-la: " + b);
} catch (error) {
  escriu("let b abans de declarar-la dóna error: " + error.name); // ReferenceError
}
let b = 5;

// Funció declarada: es pot cridar ABANS de la seva declaració
escriu(saluda("Anna"));
function saluda(nom) {
  return "Hola, " + nom + "!";
}

// Funció d'expressió: NO es pot cridar abans (és una const)
try {
  escriu(adeu("Anna"));
} catch (error) {
  escriu("La funció d'expressió abans de definir-la dóna error: " + error.name);
}
const adeu = function (nom) {
  return "Adéu, " + nom + "!";
};
escriu(adeu("Anna")); // ara sí

// PROVA-HO:
// Mou la línia "function saluda" al final del fitxer. Continua funcionant?
// Mou "const adeu" al principi del fitxer. Què canvia?
