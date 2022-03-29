const arr = ["pedra", "papel", "tesoura"];

class game {
    constructor(vitorias, derrotas) {
        this.vitorias = vitorias
        this.derrotas = derrotas
    }

    somaVitorias() {
        let resultado = this.vitorias++
        document.getElementById("vitoria").innerHTML = this.vitorias
        return resultado
    }

    somaDerrota () {
        let resultado = this.derrotas++
        document.getElementById("derrota").innerHTML = this.derrotas
        return resultado
    }

    pedraFun () {
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

    papelFun () {
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

    tesouraFun () {
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

    resetarJogo () {
        vitorias = 0;
        derrotas = 0;
        document.getElementById("vitoria").innerHTML = 0
        document.getElementById("derrota").innerHTML = 0
        document.getElementById("imagemJogador").src = ""
        document.getElementById("imagemBot").src = ""
    }
}