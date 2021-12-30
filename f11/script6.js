/* cp */
let digito, unico;

digito = lerDigito();
alert(digito);
unico = isUnicoEmArray(digito);
alert(unico);

function lerDigito(){
    let n, v=[];

    do {
        for (i = 1; i<=7; i++){
            n = Number(prompt("Indique o numero a ser incesido no array")); 
            
            if(isNaN(n)){
                alert("Valor invalido");
            }
            
            v.push(n);
        }
        
    } while (isNaN(n));

    return v;
}

function isUnicoEmArray(x){
    let filtro = x.filter((este, i) => x.indexOf(este) === i);
    return filtro;
}