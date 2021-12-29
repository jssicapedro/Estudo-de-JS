function lerLetra(){
    let l=prompt("Indique uma letra").toUpperCase();
    return l;
    
}

function isVogal(x){
    switch (x){
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            alert("É vogal");
            break;
        default:
            alert("É consuante ou um numero");
            break;
    }

}



/* cp */

let letra=lerLetra();
isVogal(letra);