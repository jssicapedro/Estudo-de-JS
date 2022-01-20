//ler 5 numeros e apresentar num array

function lerNum(){
    do {
        let n = Number(prompt("Indique um valor"));

        if(isNaN(n)){
            alert("Porfavor indique um numero!");
        }

    } while (isNaN(n));
    
    return n;
}

/* cp */
let num = lerNum();