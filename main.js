document.getElementById("biscoitoFechado").addEventListener("click", function() {
    handleClick();
});


function handleClick() {
    
    console.log("Oi, sou um teste :)")

    var elemento = document.getElementById("elementoParaMostrar");
    var biscFechado = document.getElementById("elementoParaesconder");
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
        biscFechado.style.display = "none";
    } else {
        elemento.style.display = "none";
    }
}

function outroBiscoito() {
    var biscFechado2 = document.getElementById("elementoParaesconder");
    var elemento2 = document.getElementById("elementoParaMostrar");
    biscFechado2.style.display = "block";
    elemento2.style.display = "none";
}