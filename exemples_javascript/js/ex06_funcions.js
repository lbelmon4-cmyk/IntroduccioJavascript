// EXEMPLE 06 · Funcions, arrow functions i callbacks

// 1. Funció declarada (té nom, i es pot cridar abans de definir-la)
function suma(a, b) {
  return a + b;
}

// 2. Funció d'expressió (es guarda en una variable)
const resta = function (a, b) {
  return a - b;
};

// 3. Arrow function: sintaxi curta
const multiplica = (a, b) => a * b; // retorn implícit: només hi ha una expressió
const doble = x => x * 2;           // un sol paràmetre: els parèntesis són opcionals
const saluda = () => {              // amb {} cal escriure return
  return "Hola!";
};

escriu("suma(2, 3) = " + suma(2, 3));
escriu("resta(5, 2) = " + resta(5, 2));
escriu("multiplica(4, 3) = " + multiplica(4, 3));
escriu("doble(21) = " + doble(21));
escriu("saluda() = " + saluda());
escriu("");

// 4. Callback: una funció que es passa com a paràmetre a una altra funció
function repeteix(vegades, accio) {
  for (let i = 1; i <= vegades; i++) {
    accio(i); // aquí "cridem" el callback
  }
}
repeteix(3, (numero) => escriu("Repetició número " + numero));

// 5. Callbacks amb esdeveniments: la funció s'executa QUAN passa alguna cosa
let clics = 0;
document.querySelector("#boto").addEventListener("click", () => {
  clics++;
  escriu("Nombre de clics: " + clics);
});

// 6. Un altre callback: s'executa passats 2 segons
setTimeout(() => escriu("(han passat 2 segons des que s'ha carregat la pàgina)"), 2000);

// PROVA-HO:
// 1. Crea una arrow function triplica que multipliqui per 3 i fes-la servir amb repeteix.
// 2. Fes un segon botó que reiniciï el comptador de clics.
