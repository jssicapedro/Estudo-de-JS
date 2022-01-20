/* cp */
let limite = lerNum("Indique um limite");
let a = array(limite);
fazMedia(a, limite)


function lerNum(txt){
    let n = Number(prompt(txt));
    
    do {
        if(isNaN(n)){
            alert("Valor invalido");
        }
    } while (isNaN(n));

    return n;
}

function array( x ){
    let v = [];
    for(let i = 0; i < x; i++){
        v.push(lerNum("Indique o valor da posição " + i));
    }
    alert(v);
}

function fazMedia( y , x){
    let soma = 0, media;
    for(let i = 0; i < x; i++){
        soma = soma + y[i];
        console.log(soma)
    }
}