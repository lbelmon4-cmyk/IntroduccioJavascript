// Cada instrucció acaba amb ;
let nom = "Maria";
let edat = 25;
console.log("Nom:", nom);
console.log("Edat:", edat);

// Els blocs delimiten l'àmbit de variables o instruccions
if (edat >= 18) {
  console.log("Ets major d’edat.");
} else {
  console.log("Ets menor d’edat.");
}

// Comentari d’una sola línia
let resultat = 10 + 5; // També es pot fer al final d'una línia

/*
Comentari de múltiples línies:
Aquí podem escriure més explicacions
sense afectar l’execució del codi.
*/
console.log("Resultat:", resultat);

let Nom2 = "Pau";
let nom2 = "Júlia";

console.log(Nom2); // Mostra: Pau
console.log(nom2); // Mostra: Júlia

/*---------------------------------------VAR (manera antiga)---------------------------------------*/
// 'var' permet redeclarar i reassignar
var nom3 = "Laura";
console.log(nom3); // Mostra: Laura

var nom3 = "Pau"; // Es pot redeclarar (pot causar errors)
console.log(nom3); // Mostra: Pau

//té àmbit global o de funció, no de bloc. Això pot causar comportaments inesperats:
if (true) {
  var edat2 = 25; // Disponible fora del bloc
}
console.log(edat2); // Funciona, mostra 25 (però pot ser confús)

/*------------------------------LET (manera moderna i segura)------------------------------*/
// 'let' permet reassignar, però no redeclarar
let ciutat = "Girona";
console.log(ciutat); // Mostra: Girona

ciutat = "Barcelona"; // Reassignació permesa
console.log(ciutat); // Mostra: Barcelona

// let ciutat = "Lleida"; Error: no pots redeclarar 'ciutat' al mateix àmbit

//àmbit de bloc
if (true) {
  let preu = 10;
  console.log(preu); // Funciona dins del bloc
}
// console.log(preu); Error: preu no està definit fora del bloc

//OBJECTES amb let
let cotxe = {
    marca: "Toyota",
    model: "Corolla",
    any: 2020
};

// Accedir
console.log(cotxe.marca);

// Modificar
cotxe.any = 2023;

// Afegir propietat
cotxe.color = "Blau";

// Sobreescriure tot l'objecte
cotxe = {
    marca: "Honda",
    model: "Civic",
    any: 2022
};

// Eliminar propietat
delete cotxe.model;

console.log(cotxe);

/*------------------------------CONST (valors constants)------------------------------*/
const PI = 3.1416;
console.log(PI);

// PI = 3.14; Error: no pots reassignar un const

//àmbit de bloc
if (true) {
  const missatge = "Hola!";
  console.log(missatge);
}
// console.log(missatge); Error: fora del bloc

//Encara que un const no es pot reassignar, sí que pots modificar el contingut d’un objecte o array:
const alumne = { nom: "Júlia", edat: 20 };
alumne.edat = 21; // Pots modificar una propietat
console.log(alumne); // { nom: "Júlia", edat: 21 }

// alumne = {}; No pots reassignar l’objecte sencer

/*------------------------------VARIABLES------------------------------*/
//nom descriptius i correctes
let nom4;      // correcte
let _edat;    // correcte
let $sou;     // correcte
//let 1valor;   // incorrecte, no pot començar amb un número

let nom1;        // correcte
let edat_2025;   // correcte
let $total_sum;  // correcte
//let percentatge%;// incorrecte, el % no és permès

//let for;    // incorrecte
//let const;  // incorrecte
let suma;   // correcte

let variable = 10;
let Variable = 20; 
console.log(variable); // 10
console.log(Variable); // 20


// ------------------ Exemples de tipus primitius ------------------

// ---- String (text) ----
let nomExample = "Anna";                      // literal de tipus string
let nomExampleCopia = nomExample;               // assignació copia el valor
nomExample = "Maria";                         // canvia la variable original
console.log('String - nomExample:', nomExample);      // Maria
console.log('String - nomExampleCopia:', nomExampleCopia); // Anna -> mostra que la còpia és independent

// Strings són immutables: no es pot canviar un caràcter directament
let salutExample = 'hola';
salutExample[0] = 'H';                          // no fa efecte
console.log('String immutable:', salutExample); // continua 'hola'
salutExample = 'Hola';                          // però podem reasignar la variable a un nou string
console.log('String reasignat:', salutExample);

// ---- Number (enters i decimals) ----
let aNum = 10;                              // enter
let bNum = aNum;                            // copia per valor
aNum = 20;
console.log('Number - aNum:', aNum);           // 20
console.log('Number - bNum:', bNum);           // 10

let piNum = 3.1415;                         // nombre decimal
console.log('Number (decimal):', piNum);

// ---- Boolean (true / false) ----
let esMajorExample = true;
let esMajorExampleCopia = esMajorExample;
esMajorExample = false;
console.log('Boolean - esMajorExample:', esMajorExample);         // false
console.log('Boolean - esMajorExampleCopia:', esMajorExampleCopia); // true

// ---- null (buit intencionadament) ----
let respostaNull = null;                     // valor assignat intencionadament
console.log('null:', respostaNull); // typeof null retorna 'object' (peculiaritat de JS)

// ---- undefined (sense assignar) ----
let indefinitExample;                           // variable declarada però no assignada
console.log('undefined:', indefinitExample);

// ---- Symbol (ES6) ----
const s1Example = Symbol('id');
const s2Example = Symbol('id');
console.log('Symbol s1Example === s2Example?', s1Example === s2Example); // false: cada Symbol és únic

/*
const STATUS = {
  READY: Symbol('ready'),
  RUNNING: Symbol('running'),
  DONE: Symbol('done')
};

if (state === STATUS.READY) {
  // És segur perquè cada Symbol és únic. Això evita errors que passarien si usessis strings.
}
*/

// ---- BigInt (per nombres molt grans) ----
const granBigInt = 123456789012345678901234567890n; // nota la `n` al final
console.log('BigInt:', granBigInt, '->', typeof granBigInt);

// ------------------ Exemples d'igualtat: == (coerció) vs === (estricta) ------------------
// Exemple 1: string vs number
const eqExample1_left = '5';
const eqExample1_right = 5;
console.log("'5' == 5 ->", eqExample1_left == eqExample1_right);   // true (coerció: '5' -> 5)
console.log("'5' === 5 ->", eqExample1_left === eqExample1_right); // false (tipus diferents)

// Exemple 2: 0 i false
const eqExample2_left = 0;
const eqExample2_right = false;
console.log('0 == false ->', eqExample2_left == eqExample2_right);   // true
console.log('0 === false ->', eqExample2_left === eqExample2_right); // false

// Exemple 3: null i undefined
const eqExample3_left = null;
const eqExample3_right = undefined;
console.log('null == undefined ->', eqExample3_left == eqExample3_right);   // true (cas especial)
console.log('null === undefined ->', eqExample3_left === eqExample3_right); // false

// Exemple 4: cadena buida i zero
const eqExample4_left = '';
const eqExample4_right = 0;
console.log("'' == 0 ->", eqExample4_left == eqExample4_right);   // true (coerció)
console.log("'' === 0 ->", eqExample4_left === eqExample4_right); // false

// Exemple 5: objectes i arrays (coerció amb toPrimitive)
const eqExample5_left = [];
const eqExample5_right = '';
console.log('[] == "" ->', eqExample5_left == eqExample5_right);   // true ([] -> '' en coerció)
console.log('[] === "" ->', eqExample5_left === eqExample5_right); // false

// ------------------ Exemples de funcions ------------------
//Funció declarada
diHola(); // Funciona

function diHola() {
  console.log("Hola!");
}

diHola(); // Funciona

//Funció expressada
//diHola2(); //ERROR: diHola is not a function

const diHola2 = function() {
  console.log("Hola!");
};

diHola2(); //Funciona

//Arrow function
const suma2 = (a, b) => a + b;
console.log(suma2(2, 3)); // 5

const persona = {
  nom: "Anna",
  saluda: () => {
    console.log("Hola, sóc " + this.nom);
  }
};

persona.saluda(); // "Hola, sóc undefined"

//Callbacks
//1️. Funció recursiva que calcula el factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Cas base: factorial de 0 o 1 és 1
  }
  return n * factorial(n - 1); // Crida recursiva
}

//2️. Funció que rep un número i un callback
function calculaFactorial(numero, callback) {
  var resultat = factorial(numero); // Calculem el factorial
  callback(resultat); // Cridem el callback amb el resultat
}

//3. Exemple d'ús amb una funció normal com a callback
calculaFactorial(5, function(resultat) {
  console.log("El factorial de 5 és:", resultat);
});
// El factorial de 5 és: 120