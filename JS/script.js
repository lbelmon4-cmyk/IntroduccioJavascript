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