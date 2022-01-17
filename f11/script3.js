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

        if(isNaN(n) || n < 0){
            alert("valor invalido")
        }

    } while (isNaN(n) || n < 0);
    
    return v;
}

function fazMedia(a){
    let media, soma = 0;

    for(let i = 0; i < a.length; i++){
        soma = soma + a[i];
    }

    media = soma/a.length;

    return media;
}

/* cp */
let limite = indicaLimite();
let vetor = criaVetor(limite);
let media = fazMedia(vetor);
alert("Os vetor tem os valores " + vetor + " e a média é de " + media);