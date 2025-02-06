# Costruisci una Calcolatrice JavaScript

## Note
React 18 ha incompatibilità note con i test per questo progetto (vedi issue).

## Obiettivo
Costruisci un'app che sia funzionalmente simile a questa: [JavaScript Calculator](https://javascript-calculator.freecodecamp.rocks/).

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

## Tecnologie Consigliate
Puoi usare una combinazione di:
- HTML
- JavaScript
- CSS
- Bootstrap
- SASS
- React
- Redux
- jQuery

L'uso di un framework frontend (come React) è consigliato, poiché questa sezione si concentra sull'apprendimento dei framework frontend. Tecnologie non elencate sopra sono a tuo rischio e pericolo.

## User Stories

1. La mia calcolatrice deve contenere un elemento cliccabile con un segno di uguale (=) e l'id `equals`.
2. Deve contenere 10 elementi cliccabili con i numeri da 0 a 9, con i seguenti ID:
   - `zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`
3. Deve contenere 4 elementi cliccabili per le operazioni matematiche principali con i seguenti ID:
   - `add`, `subtract`, `multiply`, `divide`
4. Deve contenere un elemento cliccabile per il punto decimale con l'id `decimal`.
5. Deve contenere un elemento cliccabile con l'id `clear`.
6. Deve contenere un elemento per visualizzare i valori con l'id `display`.
7. Premendo il pulsante `clear`, l'input e l'output devono essere cancellati e la calcolatrice deve tornare allo stato iniziale, mostrando `0` in `display`.
8. Durante l'inserimento dei numeri, questi devono essere visualizzati in `display`.
9. Devono essere possibili operazioni concatenate di qualsiasi lunghezza. Premendo `=`, deve essere mostrato il risultato corretto in `display`.
10. Non deve essere possibile inserire numeri che iniziano con più di uno zero.
11. Cliccando su `decimal`, deve essere aggiunto un `.` al numero corrente, ma non devono essere accettati due `.` nello stesso numero.
12. Deve essere possibile eseguire operazioni (+, -, *, /) su numeri con punti decimali.
13. Se vengono inseriti due o più operatori consecutivi, l'operazione eseguita deve essere l'ultimo operatore inserito (escludendo il segno meno `-`).
14. Premendo un operatore immediatamente dopo `=` deve iniziare un nuovo calcolo basato sul risultato precedente.
15. La calcolatrice deve gestire la precisione decimale con almeno 4 cifre decimali.

## Logica della Calcolatrice
Ci sono due approcci principali alla logica della calcolatrice:
1. **Immediate Execution Logic**: esegue le operazioni non rispettando la precedenza degli operatori.
2. **Formula Logic**: segue la precedenza degli operatori, come una calcolatrice scientifica.

Esempio di input: `3 + 5 * 6 - 2 / 4 =`
- **Immediate Execution Logic**: 11.5
- **Formula Logic**: 32.5

Entrambi gli approcci sono accettabili, purché i calcoli siano verificabili con una calcolatrice reale.

## Setup del Progetto
Puoi creare il tuo progetto usando questo template su CodePen e cliccando su "Save" per creare la tua versione.

Se usi un altro ambiente, aggiungi questo script nel `<body>` del tuo `index.html`:
```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

Una volta completato il progetto e superati tutti i test, invia l'URL del tuo progetto funzionante!

Buon coding! 🚀

