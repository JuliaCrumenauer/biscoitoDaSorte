const fechado = document.querySelector(".fechado");
const aberto = document.querySelector(".aberto");
const botaoAbrir = document.querySelector("#abrirBotao");
const botaoFechar = document.querySelector("#fecharBotao");

const mensagemDiv = document.getElementById('mensagem');

const messages = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A sorte favorece a mente preparada.",
    "Siga seus sonhos, pois eles conhecem o caminho.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A paciência é amarga, mas seus frutos são doces.",
    "O conhecimento é como uma árvore, se não cresce, morre.",
    "Grandes jornadas começam com pequenos passos.",
    "A vida é 10% do que acontece com você e 90% como você reage a isso.",
    "O segredo para ficar à frente é começar."
];

botaoAbrir.addEventListener("click", abrirBiscoito);
botaoFechar.addEventListener("click", fecharBiscoito);

function abrirBiscoito(event) {
    event.preventDefault();

    showRandomMessage();

    fechado.classList.add("hide");
    aberto.classList.remove("hide");

}

function fecharBiscoito(event) {
    event.preventDefault();

    fechado.classList.remove("hide");
    aberto.classList.add("hide");

}


function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    mensagemDiv.textContent = randomMessage;
    mensagemDiv.style.display = 'block';
   
}

