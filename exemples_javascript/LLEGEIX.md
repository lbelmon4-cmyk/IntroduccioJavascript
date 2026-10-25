# Exemples de JavaScript · RA3

Exemples executables per acompanyar la presentació de teoria `0373_RA3_JavaScript.pptx` i per ajudar a fer el projecte de la Fase 2.

## Com s'utilitzen

1. Descomprimeix la carpeta i obre-la amb **VS Code**.
2. Fes doble clic a `index.html` (o obre'l amb el navegador) i entra a l'exemple que vulguis. No cal cap servidor.
3. Llegeix el fitxer `.js` de cada exemple (està a la carpeta `js/` i està comentat línia a línia).
4. Obre les eines de desenvolupador amb **F12** i mira la pestanya **Consola**: allà apareixen els missatges i els errors.
5. Fes les proves que hi ha al final de cada fitxer (apartat «PROVA-HO»), recarregant la pàgina cada cop.

`js/utils.js` només conté la funció `escriu()`, que mostra un text a la pàgina i a la consola. No forma part del llenguatge: és una ajuda dels exemples.

## Mapa dels exemples

| Exemple | Concepte | Presentació de teoria | T'ajuda a la pràctica |
|---|---|---|---|
| 01 · El primer script | inline, extern, `defer`, comentaris, sintaxi | Introducció i sintaxi | Enllaçar els scripts amb `defer` |
| 02 · Variables | `var`, `let`, `const`, identificadors | Variables | No fer servir `var`; `const` i `let` |
| 03 · Hoisting | elevació de variables i funcions | Variables | Entendre errors de «no definit» |
| 04 · Tipus de dades | primitius, `undefined`, `null`, referències | Tipus de dades | Arrays i objectes del catàleg |
| 05 · `==` i `===` | coerció i igualtat estricta | Operadors i funcions | Comparacions amb `===` |
| 06 · Funcions | declarades, expressió, arrow, callbacks | Operadors i funcions | Funcions i callbacks (parts A, B i C) |
| 07 · Seleccionar elements | `getElementById`, `querySelector`... | El DOM | Localitzar elements amb els teus `id` i `class` |
| 08 · Crear i eliminar | `createElement`, `appendChild`, `remove` | El DOM | Pintar targetes i missatges d'error |
| 09 · Estils | `style` i `classList` | Manipulació d'estils | Estoc baix i errors amb classes |
| 10 · Camps en directe | `input`, `value`, `checked`, `Number()` | El DOM | Comptador de caràcters i validar números |
| 11 · Array d'objectes | dades + bucle + targetes | Tipus de dades i DOM | **Part A** (catàleg dinàmic) |
| 12 · Cerca i filtre | `filter`, `includes`, `forEach`, arrow | Funcions i DOM | **Part B** (cerca i filtre) |
| 13 · Validar un formulari | `submit`, `preventDefault`, errors i resum | El DOM | **Part C** (formulari de contacte) |
| 14 · Mode fosc | `classList.toggle()` | Manipulació d'estils | **Part D** (mode fosc) |

Els exemples 11, 12 i 13 fan servir altres temes (llibres, ciutats i club de lectura): han d'ajudar-te a entendre la tècnica, però el projecte de la botiga l'has de construir tu.
