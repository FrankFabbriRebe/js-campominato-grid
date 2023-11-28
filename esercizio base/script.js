// selezione bottone play
const buttonPlay = document.querySelector(".play")

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

        



    }
)