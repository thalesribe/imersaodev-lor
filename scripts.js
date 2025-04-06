// PARTE 1: Lista de perguntas e respostas
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

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
    if (resposta.correto) {
  acertos++; // Incrementa uma vez
}

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
