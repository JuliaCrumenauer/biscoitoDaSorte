const biscoitoImg = document.getElementById('biscoitoImg');
const mensagemDiv = document.getElementById('mensagem');
const openButton = document.getElementById('openButton');
const abrirBiscoito = document.getElementById('abrirBiscoito')

const messages = [
    "Mensagem 1",
    "Mensagem 2",
    "Mensagem 3",
    "Mensagem 4",
];

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    mensagemDiv.textContent = randomMessage;
    mensagemDiv.style.display = 'block';
    openButton.style.display = 'block';
    abrirBiscoito.style.display = 'block';
}

document.getElementById("biscoitoImg").addEventListener("click", function() {
    handleClick();
    showRandomMessage();
    openButton();
});

openButton.addEventListener('click', () => {
    biscoitoImg.src = 'biscoito-closed.png';  // Altere para a imagem do biscoito fechado
    mensagemDiv.style.display = 'none';
    openButton.style.display = 'none';
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

