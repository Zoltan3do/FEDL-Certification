# Costruisci un Markdown Previewer

**Nota:** React 18 ha alcune incompatibilità note con i test per questo progetto (vedi issue).

## Obiettivo

Crea un'app che sia funzionalmente simile a questa: [Markdown Previewer](https://markdown-previewer.freecodecamp.rocks/).

Segui le user stories qui sotto e assicurati che tutti i test vengano superati. Usa qualsiasi libreria o API di cui hai bisogno e personalizza lo stile a tuo piacimento.

Puoi utilizzare un mix di HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e jQuery per completare il progetto. È consigliato l'uso di un framework frontend (come React) poiché questa sezione riguarda l'apprendimento dei framework frontend. Tecnologie aggiuntive non elencate sopra non sono consigliate e usarle è a tuo rischio.

Stiamo valutando il supporto per altri framework frontend come Angular e Vue, ma attualmente non sono supportati. Accettiamo e cerchiamo di correggere tutti i report di problemi relativi alla tecnologia suggerita per questo progetto. Buon coding!

---

## User Stories

- **User Story #1:** Posso vedere un elemento `textarea` con un `id="editor"`.

- **User Story #2:** Posso vedere un elemento con un `id="preview"`.

- **User Story #3:** Quando inserisco del testo nel campo `#editor`, il contenuto dell'elemento `#preview` si aggiorna in tempo reale mostrando il testo della textarea.

- **User Story #4:** Quando inserisco del markdown in stile GitHub nel campo `#editor`, il testo viene convertito in HTML e visualizzato nel `#preview` in tempo reale.

  - **Suggerimento:** Non è necessario analizzare il Markdown manualmente: puoi importare la libreria Marked da [qui](https://cdnjs.com/libraries/marked).

- **User Story #5:** Quando il mio markdown previewer si carica per la prima volta, il testo predefinito nel campo `#editor` deve contenere del markdown valido che includa almeno un esempio di:

  - Un titolo (`# Titolo H1`)
  - Un sottotitolo (`## Titolo H2`)
  - Un link
  - Codice inline
  - Un blocco di codice
  - Un elemento di lista
  - Una citazione (`blockquote`)
  - Un'immagine
  - Testo in grassetto

- **User Story #6:** Quando il mio markdown previewer si carica per la prima volta, il markdown predefinito nel campo `#editor` deve essere correttamente renderizzato come HTML nell'elemento `#preview`.

---

### Bonus Opzionale

_(Non è necessario superare questo test)_

- Il mio markdown previewer interpreta i ritorni a capo e li converte in elementi `<br>` (interruzione di linea).

---

## Istruzioni per l'installazione

Puoi creare il tuo progetto utilizzando questo **template su CodePen** e cliccare su **Salva** per generare il tuo pen.  
Se preferisci usare un altro ambiente di sviluppo, aggiungi questo `<script>` nel body del tuo file `index.html`:

```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```
