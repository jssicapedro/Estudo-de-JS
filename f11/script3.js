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
    
    return v;
}

function fazMedia( y ){
    let media = 0;
    
    for(let i = 0; i < y.length; i++){
        media = media + y[i]/y.length;
    }

    alert(media);
}

/* cp */
let limite = lerNum("Indique um limite");
let numeros = array(limite);
fazMedia(numeros);