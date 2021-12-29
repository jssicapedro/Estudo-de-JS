/* Crie uma função max que recebe dois números e devolve o maior. */

function lerNumero(){
    let x;
    do{
        x=Number(prompt("Indique o primeiro valor"));
    }while(isNaN(x));
    return x;
}

function max(y1, y2){
  if (y1>y2) {
        alert("O valor " + y1 + " é o maior valor");
    } else if (y1<y2) {
        alert("O valor " + y2 + " é o maior valor");
    } else{
        alert("Os valores são iguais");
    } 
}


/* cp */
    let n1=lerNumero();
    let n2=lerNumero();
    max(n1, n2);

