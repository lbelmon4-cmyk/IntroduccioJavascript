// Funció d'ajuda compartida pels exemples (NO forma part del llenguatge JavaScript).
// escriu(text): afegeix una línia dins de l'element <pre id="sortida"> i també a la consola.
function escriu(text) {
  const sortida = document.querySelector("#sortida");
  sortida.textContent += text + "\n";
  console.log(text);
}
