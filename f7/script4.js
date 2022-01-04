let rendimento = lerRendimento();
let taxa = obterTaxaIRS(rendimento);

alert("A sua taxa de IRS é de " + taxa + "o valor total de IRS é de " + calcularIRS(rendimento, taxa).toFixed(3));/* .tofixed(3), arredonda todos os numeros para terem 3 casas decimais */

function lerRendimento(){
    let r;
    do{
        r = Number(prompt("Indique o seu rendimento deste ano"));

        if(isNaN(r) || r<0){
            alert("Valor Inválido");
        }

    }while(isNaN(r) || r<0);

    return r;
}

function obterTaxaIRS(x){
    if( x < 7091 ){
        return 0.145; /* taxa de 14.5% */
    } else if( x < 10700 ){
        return 0.23; /* taxa de 23% */
    } else if( x < 20261){
        return 0.285;
    } else if( x < 25000){
        return 0.35;
    } else if( x < 36856){
        return 0.37;
    } else if( x < 80640){
        return 0.45;
    } else{
        return 0.48;
    }
}

function calcularIRS(x,y){
    let IRS= (y*x)/100;

    return IRS;
}