// EXEMPLE 08 · Crear, afegir i eliminar elements del DOM (llista de tasques)

const camp = document.querySelector("#tasca");
const llista = document.querySelector("#llista-tasques");
const comptador = document.querySelector("#comptador");

function actualitzaComptador() {
  comptador.textContent = "Tasques pendents: " + llista.children.length;
}

function afegeixTasca(text) {
  // 1. CREAR els elements (encara no es veuen: no són al document)
  const li = document.createElement("li");
  const etiqueta = document.createElement("span");
  const botoElimina = document.createElement("button");

  // 2. MODIFICAR el contingut i les classes
  etiqueta.textContent = text + " ";   // textContent posa text net (no interpreta HTML)
  botoElimina.textContent = "Elimina";
  botoElimina.classList.add("secundari");

  // 3. AFEGIR al DOM: ara ja es veuen
  li.appendChild(etiqueta);
  li.appendChild(botoElimina);
  llista.appendChild(li);

  // 4. ELIMINAR: el botó treu el seu <li> amb remove()
  botoElimina.addEventListener("click", () => {
    li.remove();
    actualitzaComptador();
  });

  actualitzaComptador();
}

document.querySelector("#formulari-tasques").addEventListener("submit", (event) => {
  event.preventDefault();                 // evita que el formulari recarregui la pàgina
  const text = camp.value.trim();         // trim() treu els espais del principi i del final
  if (text === "") {
    camp.focus();
    return;                               // no afegim tasques buides
  }
  afegeixTasca(text);
  camp.value = "";
  camp.focus();
});

// textContent contra innerHTML
document.querySelector("#btn-text").addEventListener("click", () => {
  document.querySelector("#prova").textContent = "<strong>Hola</strong>";
});
document.querySelector("#btn-html").addEventListener("click", () => {
  document.querySelector("#prova").innerHTML = "<strong>Hola</strong>";
});

afegeixTasca("Llegir el tema de JavaScript");
afegeixTasca("Fer el primer exemple");

// PROVA-HO:
// 1. Fes que, en fer clic sobre el text d'una tasca, se li afegeixi o tregui la classe "ressaltat" (classList.toggle).
// 2. Afegeix un botó "Esborra-ho tot" que buidi la llista (pista: llista.innerHTML = "").
