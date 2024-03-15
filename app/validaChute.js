function verificaChute(chute){
    const numero = +chute

    if(validaNumero(numero)){
        elementoChute.innerHTML += '<div>Valor não é um número</div>'
        return
    }
    if (condicaoNumero(numero)){
        elementoChute.innerHTML += `<div>Número não está entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="jogarBtn">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function validaNumero(numero) {
    return isNaN(numero)
}

function condicaoNumero(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
