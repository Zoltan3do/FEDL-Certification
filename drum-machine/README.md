# Progetto Drum Machine

## Nota
**React 18 ha incompatibilità note con i test per questo progetto** ([vedi issue](#)).

## Obiettivo
Crea un'app che sia funzionalmente simile a questa: [Drum Machine](https://drum-machine.freecodecamp.rocks/).

Soddisfa le seguenti user stories e assicurati che tutti i test vengano superati. Usa qualsiasi libreria o API necessaria e personalizzala con il tuo stile.

Puoi utilizzare qualsiasi combinazione di **HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e jQuery** per completare questo progetto. Dovresti utilizzare un framework frontend (come React, ad esempio) poiché questa sezione è dedicata all'apprendimento dei framework frontend. Tecnologie aggiuntive non elencate sopra non sono consigliate e l'uso è a tuo rischio.

Stiamo valutando il supporto per altri framework frontend come Angular e Vue, ma attualmente non sono supportati. Accetteremo e cercheremo di correggere tutti i report di problemi che utilizzano lo stack tecnologico consigliato per questo progetto. **Buon coding!**

## User Stories

1. **Devo poter vedere un contenitore esterno** con un `id="drum-machine"` che contiene tutti gli altri elementi.
2. **All'interno di `#drum-machine`**, devo poter vedere un elemento con `id="display"`.
3. **All'interno di `#drum-machine`**, devo poter vedere **9 elementi drum pad cliccabili**, ciascuno con:
   - Una classe `drum-pad`
   - Un `id` univoco che descrive il clip audio che il drum pad attiverà
   - Un testo interno corrispondente a uno dei seguenti tasti: **Q, W, E, A, S, D, Z, X, C** (in quest'ordine)
4. **All'interno di ogni `.drum-pad`**, deve esserci un elemento **HTML5 `<audio>`** con:
   - Un attributo `src` che punta a un clip audio
   - Una classe `clip`
   - Un `id` corrispondente al testo interno del suo `.drum-pad` padre (es. `id="Q"`, `id="W"`, ecc.)
5. **Quando faccio clic su un elemento `.drum-pad`**, il clip audio contenuto nel suo elemento `<audio>` figlio deve essere riprodotto.
6. **Quando premo il tasto associato a ciascun `.drum-pad`**, il clip audio contenuto nel suo elemento `<audio>` figlio deve essere riprodotto (es. premendo **Q** viene attivato il drum pad contenente **Q**, premendo **W** viene attivato il drum pad contenente **W**, ecc.).
7. **Quando un `.drum-pad` viene attivato**, una stringa descrivente il clip audio associato deve essere visualizzata come testo interno dell'elemento `#display` (ogni stringa deve essere univoca).

## Campioni Audio
Puoi utilizzare i seguenti campioni audio per la tua drum machine:

- Heater 1
- Heater 2
- Heater 3
- Heater 4
- Clap
- Open-HH
- Kick-n'-Hat
- Kick
- Closed-HH

## Istruzioni per l'installazione
Puoi creare il tuo progetto utilizzando questo **[template CodePen](#)** e facendo clic su **Salva** per creare il tuo pen. 

Se preferisci utilizzare un altro ambiente, aggiungi questo tag `<script>` nel `<body>` del tuo file `index.html`:

```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Invio del progetto
Una volta completato, invia l'**URL del tuo progetto funzionante** con tutti i test superati.

