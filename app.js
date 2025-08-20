// Colocando valores no HTML dentro do JS
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Colocando valores no HTML dentro do JS
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100');

// Criando funções
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute == numeroSecreto);
    console.log(tentativas);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas ': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if(chute >= 100){
        exibirTextoNaTela('p', 'Você digitou um número maior do que 100!');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
//Gerando um número aleatorio
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}

//Limpar campo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}