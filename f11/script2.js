function lerNum(text){
//pede texto
    let n = Number(prompt(text));
//cinfirma se é um numero
    do {
        if(isNaN(n)){
            alert("Valor invalido");
        }
    } while (isNaN(n));

    return n;
}

//guarda e mostra os 5 numeros
function lerarray( x ){
    let v = [];
    //pede numeros 5 vzs
    for(let i = 0; i < x ; i++){
        v.push( lerNum( "Indique o valor" ) );
    }
    
    alert(v);
}


/* cp */
let limite = lerNum("Indique um limite");
lerarray(limite);