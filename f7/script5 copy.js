function lerProduto(){
    let p;
    /* do{ */

        p = prompt("Introduza um produto (A, B ou C)").toUpperCase();
    
   /*  }while(produto!= 'A' || produto != 'B' || produto != 'C') */
    
    return p
}


function obterPrecoUnitario(x){
    switch(x){
        case 'A':
            return 16.5;
            break;    
        case 'B':
            return 6250;
            break;
        case 'C':
            return 22500;
            break;
        default:
            break;
        }
}

function calcularPrecoIVA(x){
    switch(x){
        case 'A':
        return obterPrecoUnitario() * 1.17;
        break;
        case 'B':
        return obterPrecoUnitario() * 1.12;
        break;
        case 'C':
        return obterPrecoUnitario() * 1.05;
        break;
    }
}

function calcularPrecoDesconto(x){
    switch(x){
        case 'A':
        return calcularPrecoIVA(x) * 0.9
        case 'B':
        return calcularPrecoIVA(x) * 0.95
        case 'C':
        return calcularPrecoIVA(x) * 0.97
        }
}


function apresentarPrecos(x){
    document.write("Preco unitario " + obterPrecoUnitario(x).toFixed(2) + "<br>")
    document.write("Preco com IVA " + calcularPrecoIVA(x).toFixed(2) + "<br>")
    document.write("Preco com desconto " + calcularPrecoDesconto(x).toFixed(2)+"<br>")
}


var produto = lerProduto()
apresentarPrecos(produto)