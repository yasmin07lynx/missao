const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "qual a melhor maneira de se combater o desmatamento?", 
        alternativas: ["reflorestamento de áreas degradadas",
                        "implementação de leis mais rigorosas para a proteção das florestas"]
    },


    { //segundo objeto da lista de perguntas
        enunciado: "como podemos combater a desigualdade social de forma mais eficaz e sustentável?", 
        alternativas: ["implementar programas de educação e formação profissional acessíveis a todos",
                        "políticas de redistribuição de renda e oportunidades"]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal

function mostraPergunta(){ //função para mostrar a pergunta
    perguntaAtual = perguntas[atual]; //guardando a lista de perguntas dentro da variável perguntaAtual
    caixaPerguntas.textContent = perguntaAtual.enunciado; //manipulação 
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement ("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}