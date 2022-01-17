function indicaLimite(){
    let limite;

    do {
        limite = parseInt(prompt("Indique o limite do valor"));

        if(isNaN(limite) || limite<0){
            alert("Valor invalido");
        }

    } while (isNaN(limite) || limite<0);

    return limite;
}

function criaVetor(l){
    let n, v=[];
    do {
        for(let i = 0; i < l ; i++){
            n = parseInt(prompt("Indique o mumero da posição " + i));
            v.push(n);
        }

        if(isNaN(n)){
            alert("valor invalido")
        }

    } while (isNaN(n));
    
    return v;
}

/* cp */
let limite = indicaLimite();
let vetor = criaVetor(limite);
alert("Os vetor tem os valores " + vetor);