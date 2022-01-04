let idadeAnos = lerAnos();

alert("A sua idade em meses é igual a " + calculaMeses(idadeAnos));



function lerAnos(){
    let anos;

    do {
        anos = parseInt(prompt("Indique a sua idade em anos"));
    } while (isNaN(anos) || anos<0);

    return anos;
}

function calculaMeses(a){
    let meses = a * 365;

    return meses;
}