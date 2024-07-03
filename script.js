const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de combater o desmatamento?", 
        alternativa:[
            "Reflorestamento de área degradadas", 
            "Implementação de leis mais rigorosas para a proteção das florestas"
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?", 
        alternativa:[
            "Implementar programas de educação e formação profissional acessíveis a todos, capacitando indivíduos de comunidades desfavorecidas.", 
            "políticas de redistribuição de renda e oportunidades,ppromovendo uma distribuição igual dos recursos e do acesso aos benefícios"
        ]
    },
    ];
    
    let atual = 0;
    let perguntaAtual;
    
    function mostraPergunta(){
        perguntaAtual = pergunta[atual];
        caixaPergunta.textContent = perguntaAtual.enunciado;
    }
    mostraPergunta();