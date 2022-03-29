const arr = ["pedra", "papel", "tesoura"];
let vitorias = 0;
let derrotas = 0;



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
// Utilizando o ".src", para inserir a opção da escolha tanto do jogador quando do robo(aleatório)
function pedraFun() {
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio)
    document.getElementById("imagemJogador").src = `imagens/pedra.png`
    
    if (sorteio === 0) {
        document.getElementById("imagemBot").src = `imagens/pedra_espelhada.png`
        return console.log("Deu empate!!!");
    } else if (sorteio === 1) {
        somaDerroas();
        document.getElementById("imagemBot").src = `imagens/papel_espelhada.png`
        return console.log("Você perdeu!!!");
    } else {
        somaVitorias()
        document.getElementById("imagemBot").src = `imagens/tesoura_espelhada.png`
        return console.log("Voce Ganhou!!!");
    }
}

// Função que sorteia condições para a escolha de papel
// A variável Sorteio esta responsavel por armazenar o index sorteado do array
// Caso a pessoa obtenha vitória, a função somaVitórias é chamada somando um ponto para vitórias
// Caso a pessoa obtenha derrota, a função somaDerrotas é chamada somando um ponto para derrotas
// Utilizando o ".src", para inserir a opção da escolha tanto do jogador quando do robo(aleatório)
function papelFun() {
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio);
    document.getElementById("imagemJogador").src = `imagens/papel.png`

    if (sorteio === 0) {
        somaVitorias();
        document.getElementById("imagemBot").src = `imagens/pedra_espelhada.png`
        console.log("Você Ganhou!!!")
    } else if (sorteio === 1) {
        document.getElementById("imagemBot").src = `imagens/papel_espelhada.png`
        console.log("Você empate!!!");
    } else {
        somaDerroas();
        document.getElementById("imagemBot").src = `imagens/tesoura_espelhada.png`
        console.log("Você Perdeu!!!");
    }
}

// Função que sorteia condições para a escolha de tesoura
// A variável Sorteio esta responsavel por armazenar o index sorteado do array
// Caso a pessoa obtenha vitória, a função somaVitórias é chamada somando um ponto para vitórias
// Caso a pessoa obtenha derrota, a função somaDerrotas é chamada somando um ponto para derrotas
// Utilizando o ".src", para inserir a opção da escolha tanto do jogador quando do robo(aleatório)
function tesouraFun() {
    let sorteio = Math.floor(Math.random() * arr.length);
    console.log(sorteio);
    document.getElementById("imagemJogador").src = `imagens/tesoura.png`

    if (sorteio === 0) {
        somaDerroas();
        document.getElementById("imagemBot").src = `imagens/pedra_espelhada.png`
        console.log("Você perdeu");
    } else if (sorteio === 1) {
        somaVitorias();
        document.getElementById("imagemBot").src = `imagens/papel_espelhada.png`
        console.log("Você Ganhou!");
    } else {
        document.getElementById("imagemBot").src = `imagens/tesoura_espelhada.png`
        console.log("Deu Empate!")
    }
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