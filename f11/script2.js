
function pedeQuantidade(){
    let quantidade;
    do {
       quantidade = parseInt(prompt("Inque a quantidade do vetor"));
    } while (isNaN(quantidade) || quantidade<=0);
        
    return quantidade;
}

function lerValore(x){
    let n; valores=[];
    
        do {
            for (i=1; i<=x; i++){
                n=Number(prompt("Indique os valores positivos do seu vetor"));

                if(isNaN(n)|| n<0){
                    alert("Valor inválido!\nPor favor indique  valores superiores a 0");
                }

                valores.push(n);
            }
        } while (isNaN(n)|| n<0);
        
        return valores;
    }

/* cp */
let n, v=[];

n = pedeQuantidade();
v = lerValore(n);
alert(v);