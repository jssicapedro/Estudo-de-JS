function lerNum(){
    let n, v=[];
    do {
        for(i = 0; i < 5; i++){
            n=parseInt(prompt("Indique o valor n.º" + i));

            v.push(n);   
        }

        if(isNaN(n)){
            alert("Valor Inválido")
        }

    } while (isNaN(n));

    return v;
}

/* pp */
numero = lerNum();
alert("Os valores do array são" + numero);