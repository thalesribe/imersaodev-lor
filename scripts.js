document.addEventListener("DOMContentLoaded", function () {
  const perguntas = [
  {
    pergunta: "Só os sábios passam. Escolha bem, humano!",
    respostas: [
      { opcao: "O fogo se apaga quando está com fome", correto: false },
      { opcao: "O espelho nunca mente, mas também nunca fala.", correto: true },
      { opcao: "Um rio seco ainda afoga tolos.", correto: false }
    ]
  },
  {
    pergunta: "A verdade está entre linhas. Leia com cuidado:",
    respostas: [
      { opcao: "Se fechar os olhos, o tempo para.", correto: false },
      { opcao: "Um relógio parado acerta duas vezes ao dia.", correto: true },
      { opcao: "A sombra pesa mais que a luz.", correto: false }
    ]
  },
  {
    pergunta: "Apenas quem observa bem, entende:",
    respostas: [
      { opcao: "As nuvens são feitas de fumaça mágica.", correto: false },
      { opcao: "O sol gira em torno da Terra uma vez por dia.", correto: false },
      { opcao: "A água ferve a 100°C ao nível do mar.", correto: true }
    ]
  },
  {
    pergunta: "Teste seu bom senso. Só uma é lógica:",
    respostas: [
      { opcao: "Todos os caminhos levam ao erro.", correto: false },
      { opcao: "Alguns objetos são azuis. Todos os livros são objetos. Logo, alguns livros podem ser azuis.", correto: true },
      { opcao: "Se um gato mia, todo animal mia.", correto: false }
    ]
  },
  {
    pergunta: "A ponte só abre para quem entende o mundo:",
    respostas: [
      { opcao: "O vento sopra porque o céu respira.", correto: false },
      { opcao: "Quem está em silêncio, diz mais que mil palavras.", correto: false },
      { opcao: "Um espelho reflete, mas nunca emite luz própria.", correto: true }
    ]
  }
];

  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");

  let indiceAtual = 0;
  let acertos = 0;

  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.innerHTML = perguntaAtual.pergunta;
    respostasElemento.innerHTML = "";

    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      const resposta = perguntaAtual.respostas[i];
      const botao = document.createElement("button");
      botao.classList.add("botao-resposta");
      botao.innerText = resposta.opcao;
      botao.onclick = function () {
        if (resposta.correto) {
          acertos++;
        }

        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          carregarPergunta();
        } else {
          finalizarJogo();
        }
      };
      respostasElemento.appendChild(botao);
    }
  }

  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  }

  carregarPergunta();
});
