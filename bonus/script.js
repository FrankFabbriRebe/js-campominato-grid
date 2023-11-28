// selezione bottone play
const buttonPlay = document.querySelector(".play");

// selezione difficoltà
const selezioneDifficolta = document.getElementById("difficoltà");

// al click del bottone play appare la griglia
buttonPlay.addEventListener("click", 
    function()  {

        // creazione container
        const container = document.createElement("div");

        // aggiunta classe
        container.classList.add("container");

        // selezione div main
        const main = document.querySelector("main");

        // append al main
        main.append(container);

        // difficoltà selezionata
        const difficoltaSelezionata = selezioneDifficolta.value;
        
        // quantità di square
        let squareNum;

        // se difficoltà seleziona è facile
        if (difficoltaSelezionata === "facile") {

            squareNum = 100;

             // ciclo for per creare 100 quadrati
            for (let i = 1; i <= squareNum; i++) {
                create(i, container);
            }

        }

        // se difficoltà selezionata è medio
        if (difficoltaSelezionata === "medio") {

            squareNum = 81;

            // ciclo for per creare 100 quadrati
           for (let i = 1; i <= squareNum; i++) {
                create(i, container);
           }   

        }

        // se difficoltà selezionata è difficile
        if (difficoltaSelezionata === "difficile") {

            squareNum = 49;

            // ciclo for per creare 100 quadrati
           for (let i = 1; i <= squareNum; i++) {
                create(i, container);
           }   

        }

    }
)


//funzione
function create(i, container) {

    // creazione quadrati interni
    const square = document.createElement("div");

    // aggiunta classe 
    square.classList.add("square");

    // append al container
    container.append(square);

    // creazione contenuti square
    const number = i;

    // append allo square
    square.append(number);

    // al click della cella cambia colore di sfondo e stampa in console il risultato
    square.addEventListener("click", 
        function()  {

            // aggiunta classe
            square.classList.add("clicked");

            // stampa in console il numero
            console.log(i);

        }
    )

}