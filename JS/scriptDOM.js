// scriptDOM.js
// - Selecció d'elements
// - Propietats per modificar (textContent, innerHTML, value, atributs)
// - Crear, afegir i eliminar nodes
// - Manipulació d'estils (.style i .classList)

/*
Exemple: 
document.addEventListener('DOMContentLoaded', () => {
	// codi que s'executa quan el DOM està carregat
});

document.addEventLister
document.getElementById('identificador').addEventListener
- funció que espera un esdeveniment i després fa alguna cosa quan això pasa 

Esdeveniments de pàgina
'DOMContentLoaded'
'load'
'resize'
'scroll'

Esdeveniment de ratolí
'click'
'dblclick'
'mouseover'
'mouseout'
'mousedown'
'mouseup'
'mousemove'

Esdeveniment de teclat
'keydown'
'keyup'
'keypress'

Esdeveniment de formulari
'submit'
'change'
'input'
'focus'
'blur'

- nom de l'esdeveniment que estem escolant

() => {}
- funció anònima del tipus arrow que s'executa quan es produeix l'esdeveniment
*/

document.addEventListener('DOMContentLoaded', () => {
	// Creem una zona de demostració dins del body
	const demoRoot = document.createElement('section');
	demoRoot.id = 'dom-demo-root';
	demoRoot.innerHTML = `
		<h2 id="demo-title">DOM: exemples bàsics</h2>
		<p class="demo-paragraph">Aquest paràgraf és un <strong>node d'element</strong> amb un <em>node de text</em> fill.</p>
		<input id="demo-input" type="text" value="Text inicial" />
		<div id="list-container">
			<h3>Llista d'elements</h3>
			<ul class="demo-list">
				<li class="item">Element 1</li>
				<li class="item">Element 2</li>
			</ul>
		</div>
		<div id="controls">
			<button id="btn-change-text">Canvia text</button>
			<button id="btn-add-item">Afegir item</button>
			<button id="btn-remove-item">Eliminar últim item</button>
			<button id="btn-toggle-highlight">Toggle highlight</button>
		</div>
	`;
	document.body.appendChild(demoRoot);

	

	// ---------------- Selecció d'elements ----------------
	const titleById = document.getElementById('demo-title');
	console.log('getElementById("demo-title") -> ' + titleById.tagName);

	const itemsByClass = document.getElementsByClassName('item'); // HTMLCollection en viu
	console.log('getElementsByClassName("item") length -> ' + itemsByClass.length);

	const firstItem = document.querySelector('.item'); // primer element que coincideix
	console.log('querySelector(".item") -> ' + firstItem.textContent);

	const allItems = document.querySelectorAll('.item'); // NodeList estàtic
	console.log('querySelectorAll(".item") length -> ' + allItems.length);

	// ---------------- Propietats principals per modificar ----------------
	const paragraph = document.querySelector('.demo-paragraph');
	console.log('textContent (paràgraf): ' + paragraph.textContent);

	const input = document.getElementById('demo-input');
	console.log('value (input) inicial -> ' + input.value);

	// Atributs
	const listContainer = document.getElementById('list-container');
	console.log('getAttribute id of listContainer -> ' + listContainer.getAttribute('id'));
	listContainer.setAttribute('data-demo', '1');
	//data-demo="1" és un atribut personalitzat que podem afegir per donar informació extra
	console.log('setAttribute data-demo -> ' + listContainer.getAttribute('data-demo'));

	// ---------------- Crear, afegir i eliminar nodes ----------------
	const ul = document.querySelector('.demo-list');

	document.getElementById('btn-add-item').addEventListener('click', () => {
		const li = document.createElement('li');
		li.className = 'item';
		li.textContent = 'Nou element ' + (ul.children.length + 1);
		ul.appendChild(li); // afegim al final
		console.log('appendChild -> afegit: ' + li.textContent + ' | total items: ' + ul.children.length);
	});

	document.getElementById('btn-remove-item').addEventListener('click', () => {
		const last = ul.lastElementChild;
		if (last) {
			last.remove(); // eliminar element del DOM
			console.log('remove() -> eliminat últim item | total items: ' + ul.children.length);
		} else {
			console.log('remove() -> no hi ha elements per eliminar');
		}
	});

	// Modificar contingut amb textContent / innerHTML
	document.getElementById('btn-change-text').addEventListener('click', () => {
		// textContent: escriu només text (escapa HTML)
		paragraph.textContent = 'Paràgraf actualitzat amb textContent. Valor input: ' + input.value;
		// innerHTML: permet HTML (precaució amb dades externes)
		titleById.innerHTML = 'DOM: <small>exemples</small>';
		console.log('textContent i innerHTML actualitzats');
	});

	// ---------------- Manipulació d'estils ----------------
	const btnToggle = document.getElementById('btn-toggle-highlight');
	btnToggle.addEventListener('click', () => {
		// 1) modificant propietats CSS directament
		if (paragraph.style.backgroundColor === 'yellow') {
			paragraph.style.backgroundColor = '';
			paragraph.style.padding = '';
			console.log('.style -> netejat styles directes');
		} else {
			paragraph.style.backgroundColor = 'yellow';
			paragraph.style.padding = '6px';
			console.log('.style -> aplicat backgroundColor i padding');
		}

		// 2) afegint o eliminant classes amb classList
		ul.classList.toggle('highlight-list');
		console.log('.classList.toggle -> highlight-list toggled');
	});

	// Exemple: callback com temporitzador (mostra que les operacions DOM es poden fer des de callbacks)
	setTimeout(() => {
		console.log('Timeout: afegint un element de prova després de 1s');
		const li = document.createElement('li');
		li.className = 'item';
		li.textContent = 'Item automàtic';
		ul.appendChild(li);
	}, 1000);

	// Accessibilitat: focusar l'input per a que l'alumne pugui provar
	input.focus();
});
