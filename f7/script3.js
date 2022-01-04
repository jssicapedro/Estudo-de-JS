let a, b, c, maximo;

a = lerNumero();
b = lerNumero();
c = lerNumero();
maximo = max(a, b, c);

function lerNumero(){
    let n;
    do{
        n = Number(prompt("Indique o numero"));
    }while(isNaN(n))

    return n;
}

function max(x, y, z){
    if (x>y && x>z) {
        alert("O maior valor é " + x);
    } else if (y>z && y>x){
        alert("O maior valor é " + y);
    } else{
        alert("O maior valor é " + z);
    }
}