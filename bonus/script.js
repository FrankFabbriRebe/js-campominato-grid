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
    
        // ciclo for per creare 100 quadrati
        for (let i = 1; i <= 100; i++) {

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

    }
)

