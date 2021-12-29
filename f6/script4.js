function lerAno(){
    let a;
    do {
        a = parseInt(prompt("Indique o ano para saber se ele é bissexto")); 
        
        if(isNaN(a)){
            alert("Valor inválido");
        }

    }while(isNaN(a));

    return a; 
}

function isBissexto(x){
    if(x%4==0 && x%400==0 || x%100!=0){
        alert("O ano " + x + " é um ano Bissexto");
    } else{
        alert("O ano " + x + " NÃO é um ano Bissexto");
    }
}

/* cp */
let ano = lerAno();
isBissexto(ano);