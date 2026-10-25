// EXEMPLE 01 · El primer script
// Aquest fitxer està enllaçat des de l'HTML amb: <script src="js/ex01_hola.js" defer></script>

// Això és un comentari d'una sola línia
/* Això és un comentari
   de diverses línies */

// console.log() escriu a la consola del navegador (F12 > pestanya Consola)
console.log("Hola, món!");

// Les instruccions acaben amb ; (és opcional, però recomanat)
const nom = "Anna";
const Nom = "Pere"; // JavaScript distingeix majúscules i minúscules: nom i Nom són variables diferents

escriu("Hola, " + nom + " i " + Nom + "!");
escriu("nom i Nom són el mateix valor? " + (nom === Nom));

// Un bloc de codi es delimita amb {}
if (nom !== Nom) {
  escriu("Són dues variables diferents.");
}

// Primer contacte amb el DOM: canviem el text d'un element de la pàgina.
// Funciona perquè l'script porta defer: s'executa quan l'HTML ja està carregat.
document.querySelector("#titol").textContent = "El JavaScript ja funciona!";

// PROVA-HO:
// 1. Canvia el valor de la constant nom i recarrega la pàgina.
// 2. Treu l'atribut defer de l'HTML i mira què passa a la consola (quin error apareix?).
