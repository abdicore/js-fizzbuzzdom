/* 
Consegna:
MILESTONE 1
Scrivere un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
MILESTONE 2:
Creiamo un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi via JS.
Possiamo usare varie tecniche  (template literals, innerHTML, appendecc)
MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, 
un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche (style , className, classList)
Se siete a corto di idee per lo stile, potreste prendere spunto dallo screenshot fornito in consegna.
Consigli del giorno:
 Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore
*/


/*
 1- Creare un ciclo for per avere numeri da 1 a 100
 2- Trovare il modo per selezionare i numeri 3 e 5 e dargli e rispettivi nomi
 4- Selezionare i multipli sia di 3 ch di 5
*/


// 1 creare programma per generare nemeri fino a 100

for (let i = 1; i <=100; i++)
    console.log (i)

// 2 Stampare i numeri divisibili per 3 e 5 poi per 3 poi per 5 e tutti gli altri

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz');
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz');
        } else {
            console.log(i);
        }
    }