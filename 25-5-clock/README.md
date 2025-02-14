# Costruisci un Orologio 25 + 5

> **Nota:** React 18 ha note incompatibilità con i test per questo progetto (vedi issue).

## Obiettivo

Crea un'app funzionalmente simile a: [25 + 5 Clock](https://25--5-clock.freecodecamp.rocks).

Segui le user story riportate di seguito e supera tutti i test. Puoi utilizzare qualsiasi libreria o API necessaria e applicare il tuo stile personale.

## Tecnologie Consentite

Puoi usare una combinazione di:

- **HTML, JavaScript, CSS**
- **Bootstrap, SASS**
- **React, Redux, jQuery**

Si consiglia di utilizzare un framework frontend, come React, poiché questa sezione è dedicata all'apprendimento dei framework frontend.

Tecnologie non elencate sopra non sono consigliate e il loro utilizzo è a proprio rischio. Stiamo valutando il supporto per altri framework frontend come Angular e Vue, ma al momento non sono supportati.

## User Stories

1. Deve essere presente un elemento con `id="break-label"` contenente una stringa (es. "Break Length").
2. Deve essere presente un elemento con `id="session-label"` contenente una stringa (es. "Session Length").
3. Deve essere possibile visualizzare due elementi cliccabili con ID `id="break-decrement"` e `id="session-decrement"`.
4. Deve essere possibile visualizzare due elementi cliccabili con ID `id="break-increment"` e `id="session-increment"`.
5. Deve essere presente un elemento con `id="break-length"`, che per impostazione predefinita mostra il valore 5.
6. Deve essere presente un elemento con `id="session-length"`, che per impostazione predefinita mostra il valore 25.
7. Deve essere presente un elemento con `id="timer-label"`, che indica l'inizio di una sessione (es. "Session").
8. Deve essere presente un elemento con `id="time-left"`. Questo valore deve essere sempre mostrato nel formato `mm:ss` (es. `25:00`).
9. Deve essere presente un elemento cliccabile con `id="start_stop"`.
10. Deve essere presente un elemento cliccabile con `id="reset"`.
11. Cliccando su `reset`, il timer deve fermarsi, i valori di `id="break-length"` e `id="session-length"` devono tornare a 5 e 25 rispettivamente, e `id="time-left"` deve resettarsi allo stato iniziale.
12. Cliccando su `break-decrement`, il valore di `break-length` deve diminuire di 1.
13. Cliccando su `break-increment`, il valore di `break-length` deve aumentare di 1.
14. Cliccando su `session-decrement`, il valore di `session-length` deve diminuire di 1.
15. Cliccando su `session-increment`, il valore di `session-length` deve aumentare di 1.
16. Non deve essere possibile impostare un valore di sessione o pausa inferiore o uguale a 0.
17. Non deve essere possibile impostare un valore di sessione o pausa superiore a 60.
18. Cliccando per la prima volta su `start_stop`, il timer deve avviarsi dal valore visualizzato in `session-length`.
19. Quando il timer è in esecuzione, `time-left` deve aggiornarsi ogni secondo e mostrare il tempo rimanente in `mm:ss`.
20. Se il timer è in esecuzione e si clicca su `start_stop`, il conto alla rovescia deve mettersi in pausa.
21. Se il timer è in pausa e si clicca su `start_stop`, il conto alla rovescia deve riprendere dal punto in cui era stato fermato.
22. Quando il conto alla rovescia di una sessione raggiunge `00:00`, `timer-label` deve indicare l'inizio di una pausa.
23. Quando il conto alla rovescia di una sessione raggiunge `00:00`, un nuovo conto alla rovescia per la pausa deve iniziare, basandosi sul valore di `break-length`.
24. Quando il conto alla rovescia di una pausa raggiunge `00:00`, `timer-label` deve indicare l'inizio di una nuova sessione.
25. Quando il conto alla rovescia di una pausa raggiunge `00:00`, un nuovo conto alla rovescia per la sessione deve iniziare, basandosi sul valore di `session-length`.
26. Quando il conto alla rovescia raggiunge `00:00`, deve suonare un allarme, utilizzando un tag audio HTML5 con `id="beep"`.
27. L'elemento audio con `id="beep"` deve durare almeno 1 secondo.
28. Il suono dell'allarme (`beep`) deve fermarsi e tornare all'inizio quando si preme `reset`.

## Costruzione del Progetto

Puoi creare il progetto usando questo template CodePen e cliccare "Save" per creare il tuo pen. Se preferisci usare un altro ambiente, aggiungi questo tag `<script>` nel corpo del tuo file `index.html`:

```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Consegna

Una volta completato il progetto, invia l'URL della tua implementazione funzionante con tutti i test superati.

**Buona programmazione!** 🚀

