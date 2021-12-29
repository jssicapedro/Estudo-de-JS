function lerNumero(){
    let n;
    do {
        n = Number(prompt("Indique um valor para saber se é par ou impar"));
        
        if(isNaN(n)){
            alert("Valor inválido");
        }

    } while (isNaN(n));

    

    return n;
}

function isParImpar(x){
    if (x%2==0){
        alert(x + " é um numero par");
        return true;
    } else {
        alert(x + " é um valor impar");
    }
}

/* cp */
let numero = lerNumero();
isParImpar(numero)