const arr = ["pedra", "papel", "tesoura"];
let vitorias = 0;
let derrotas = 0;
let pedra = document.getElementById("imagemJogador");
let papel = document.getElementById("imagemJogador");
let tesoura = document.getElementById("imagemJogador");
let pedra_espelhada = document.getElementById("imagemBot");
let papel_espelhada = document.getElementById("imagemBot");
let tesoura_espelhada = document.getElementById("imagemBot");



// Função que soma o total de vitórias, armazena na variável e mostra na tela
function somaVitorias() {
    let resultado = vitorias++
    document.getElementById("vitoria").innerHTML = vitorias
    return resultado
}

// Função que soma o Total de derrotas, armazena na variável e mostra na tela
function somaDerroas() {
    let resultado = derrotas++
    document.getElementById("derrota").innerHTML = derrotas
    return resultado
}

// Função que sorteia condições para a escolha de pedra
// A variável Sorteio esta responsavel por armazenar o index sorteado do array
// Caso a pessoa obtenha vitória, a função somaVitórias é chamada somando um ponto para vitórias
// Caso a pessoa obtenha derrota, a função somaDerrotas é chamada somando um ponto para derrotas
function pedraFun() {
    pedra.style.opacity = 0
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio)
    aparecerImagemPedra()
    
    if (sorteio === 0) {
        pedra_espelhada.style.opacity = 0
        aparecerImagemPedraEspelhada()
    } else if (sorteio === 1) {
        somaDerroas();
        papel_espelhada.style.opacity = 0
        aparecerImagemPapelEspelhada()
    } else {
        somaVitorias()
        tesoura_espelhada.style.opacity = 0
        aparecerImagemTesouraEspelhada()
    }
}

// Função que sorteia condições para a escolha de papel
// A variável Sorteio esta responsavel por armazenar o index sorteado do array
// Caso a pessoa obtenha vitória, a função somaVitórias é chamada somando um ponto para vitórias
// Caso a pessoa obtenha derrota, a função somaDerrotas é chamada somando um ponto para derrotas
function papelFun() {
    papel.style.opacity = 0
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio);
    aparecerImagemPapel()

    if (sorteio === 0) {
        somaVitorias();
        pedra_espelhada.style.opacity = 0
        aparecerImagemPedraEspelhada()
    } else if (sorteio === 1) {
        papel_espelhada.style.opacity = 0
        aparecerImagemPapelEspelhada()
    } else {
        somaDerroas();
        tesoura_espelhada.style.opacity = 0
        aparecerImagemTesouraEspelhada()
    }
}

// Função que sorteia condições para a escolha de tesoura
// A variável Sorteio esta responsavel por armazenar o index sorteado do array
// Caso a pessoa obtenha vitória, a função somaVitórias é chamada somando um ponto para vitórias
// Caso a pessoa obtenha derrota, a função somaDerrotas é chamada somando um ponto para derrotas
function tesouraFun() {
    tesoura.style.opacity = 0
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio);
    aparecerImagemTesoura()

    if (sorteio === 0) {
        somaDerroas();
        pedra_espelhada.style.opacity = 0
        aparecerImagemPedraEspelhada()
    } else if (sorteio === 1) {
        somaVitorias();
        papel_espelhada.style.opacity = 0
        aparecerImagemPapelEspelhada()
    } else {
        tesoura_espelhada.style.opacity = 0
        aparecerImagemTesouraEspelhada()
    }
}

// As próximas funções tem a funcionalidade de fazer as imagens aparecerem na tela
// Tanto as imagens do jogador, qunado a do bot
// Utilizando o ".src", para inserir a opção da escolha tanto do jogador quando do robo(aleatório)
// Alternando a opacidade de 0 para 1 com o intervalo de 200 Milesegundos
// Para dar um efeito de piscar na tela a cada jogada
function aparecerImagemPedra() {
    setTimeout(function() {
        pedra.src = `imagens/pedra.png`
        pedra.style.opacity = 1
    }, 200)
}

function aparecerImagemPapel() {
    setTimeout(function() {
        papel.src = `imagens/papel.png`
        papel.style.opacity = 1
    }, 200)
}

function aparecerImagemTesoura () {
    setTimeout(function() {
        tesoura.src = `imagens/tesoura.png`
        tesoura.style.opacity = 1
    }, 200)
}

function aparecerImagemPedraEspelhada() {
    setTimeout(function() {
        pedra_espelhada.src = `imagens/pedra_espelhada.png`
        pedra_espelhada.style.opacity = 1
    }, 200)
}

function aparecerImagemPapelEspelhada() {
    setTimeout(function() {
        papel_espelhada.src = `imagens/papel_espelhada.png`
        papel_espelhada.style.opacity = 1
    }, 200)
}

function aparecerImagemTesouraEspelhada () {
    setTimeout(function() {
        tesoura_espelhada.src = `imagens/tesoura_espelhada.png`
        tesoura_espelhada.style.opacity = 1
    }, 200)
}

// Função para resetar todos os campos(imagens, contadores)
function resetarJogo() {
    vitorias = 0;
    derrotas = 0;
    document.getElementById("vitoria").innerHTML = 0
    document.getElementById("derrota").innerHTML = 0
    document.getElementById("imagemJogador").src = ""
    document.getElementById("imagemBot").src = ""
}