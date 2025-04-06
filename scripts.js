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
    // ... outras perguntas
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
