function lerValore(){
    let n; valores=[];
    
        do {
            for (i=1; i<=5; i++){
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
let v=[];

v = lerValore();
alert(v);
