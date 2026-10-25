// EXEMPLE 09 · Manipular estils: style i classList

const caixa = document.querySelector("#caixa");

// 1. Propietat style: modifica una regla CSS concreta (en camelCase!)
//    background-color  ->  backgroundColor
document.querySelector("#btn-vermell").addEventListener("click", () => {
  caixa.style.backgroundColor = "tomato";
  caixa.style.color = "white";
});
document.querySelector("#btn-mida").addEventListener("click", () => {
  caixa.style.fontSize = "2rem";
});
document.querySelector("#btn-reinicia-style").addEventListener("click", () => {
  caixa.style.backgroundColor = "";  // buit = torna a l'estil del CSS
  caixa.style.color = "";
  caixa.style.fontSize = "";
});

// 2. classList: afegir, treure i alternar classes CSS (és la manera MÉS recomanada)
//    Les classes ja estan definides al CSS (.destacat, .ressaltat); JavaScript només les posa o les treu.
document.querySelector("#btn-add").addEventListener("click", () => {
  caixa.classList.add("destacat");
});
document.querySelector("#btn-remove").addEventListener("click", () => {
  caixa.classList.remove("destacat");
});
document.querySelector("#btn-toggle").addEventListener("click", () => {
  caixa.classList.toggle("ressaltat");   // si la té la treu; si no la té l'afegeix
  escriu("Té la classe ressaltat? " + caixa.classList.contains("ressaltat"));
});

// A la PRÀCTICA useu classList (cap estil en línia): l'aspecte es defineix al CSS.

// PROVA-HO:
// 1. Afegeix una classe .gran al CSS (exemples.css) i un botó que l'afegeixi o la tregui amb toggle.
// 2. Canvia la vora de la caixa amb style: caixa.style.border = "4px solid green".
