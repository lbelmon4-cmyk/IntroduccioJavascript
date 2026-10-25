// EXEMPLE 04 · Tipus de dades

// --- tipus primitius: valors simples i immutables ---
const text = "Hola";
const edat = 17;
const preu = 12.5;
const major = true;
const buit = null;      // buit intencionadament (l'assigna el programador)
let senseValor;         // sense assignar: JavaScript li dóna undefined
const gran = 12345678901234567890n; // bigint

// typeof ens diu el tipus d'un valor
// (les cometes inverses ` ` permeten posar variables dins del text amb ${ })
escriu(`text      -> ${typeof text}`);
escriu(`edat      -> ${typeof edat}`);
escriu(`preu      -> ${typeof preu}  (enters i decimals són el mateix tipus: number)`);
escriu(`major     -> ${typeof major}`);
escriu(`senseValor-> ${typeof senseValor}`);
escriu(`buit      -> ${typeof buit}   (error històric del llenguatge: hauria de ser null)`);
escriu(`gran      -> ${typeof gran}`);

escriu("");

// --- primitius: l'assignació COPIA el valor ---
let x = 10;
let y = x;
y = 20;
escriu(`Primitius: x = ${x}, y = ${y}  (cada variable és independent)`);

// --- compostos: l'assignació COPIA LA REFERÈNCIA ---
const a = { nom: "Anna" };
const b = a;               // b apunta al MATEIX objecte que a
b.nom = "Pere";
escriu(`Objectes: a.nom = ${a.nom}, b.nom = ${b.nom}  (és el mateix objecte!)`);

const notes = [5, 7, 9];
const copia = notes;       // el mateix array
copia.push(10);
escriu(`Arrays: notes = [${notes}]  (també s'ha modificat)`);

escriu("");
escriu("typeof d'un array: " + typeof notes + "  → per saber si és array: Array.isArray(notes) = " + Array.isArray(notes));

// PROVA-HO:
// 1. Declara let k; i mostra k i typeof k. Després assigna-hi null.
// 2. Fes una còpia REAL de l'array amb: const copia2 = [...notes];  (i comprova que ara són independents)
