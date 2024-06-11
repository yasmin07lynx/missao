const caixaPrincipal = document.querySelectorAll(".caixa-principal");
const caixaPergunta = document.querySelectorAll(".caixa-pergunta");
const caixaAlternativa = document.querySelectorAll(".caixa-alternativa");
const caixaResultado = document.querySelectorAll(".caixa-resultado");
const textoResultado = document.querySelectorAll(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de combater o desmatamento?", 
        alternativas:[
            "Reflorestamento de área degradadas", 
            "Implementação de leis mais rigorosas para a proteção das florestas"
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?", 
        alternativas:[
            "Implementar programas de educação e formação profissional acessíveis a todos, capacitando indivíduos de comunidades desfavorecidas.", 
            "políticas de redistribuição de renda e oportunidades,ppromovendo uma distribuição igual dos recursos e do acesso aos benefícios"
        ]
    },
    ];
    
    let atual = 0;
    let perguntaAtual;
    
    function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    mostraPergunta();