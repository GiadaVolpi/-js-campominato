// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// 1) creo l’array(vuoto)
// 2)Creo un numero causale
// 3)Controllo che il numero non ci sia nell’Array
// 4)Se non c’è lo metto nell’array
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina (l’utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.
// 1) Se pesto la mina GAME OVER(se il numero è nell’array sei al CREATORE )
// 2)Altrimenti ripetiamo la richiesta di inserire un numero
// La partita termina quando il giocatore inserisce un numero “mina” o raggiunge il numero massimo possibile di numeri consentiti (84).


// genera 16 numeri casuali tra 1 e 100 => BOMBE
var insiemeBombe = [];
while (insiemeBombe.length < 16) {
    var bomba = Math.floor(Math.random() * 100) + 1;
    if (!insiemeBombe.includes(bomba)) {
        insiemeBombe.push (bomba);
    }
}
console.log(insiemeBombe);

// array per sapere quante volte l'utente ha inserito un numero corretto prima di esplodere
var scelteUtente = [];
var gioco = true;
for (var i = 0; i < 84; i++) {
    var numUtente = parseInt(prompt("Dimmi un numero da 1 a 100"));
    if (numUtente <= 0 || numUtente > 100) {
        alert ("Mi dispiace hai sbagliato a scrivere");
        console.log ("Ti sei sbagliato, ricomincia");
    } else if (numUtente == bomba) {
        var punteggio = scelteUtente.indexOf(numUtente) + 1;
        console.log ("Mi dispiace hai perso! Il totale dei punti è " + punteggio + " punti");
    }
}

console.log ((i) + " Questo è il numero che hai scelto " + numUtente);
scelteUtente.push(numUtente);
console.log (scelteUtente);
