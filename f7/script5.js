let menu = lerMenu();
let valor = valorUnitario(menu);

function lerMenu(){
    let escolher;

    /* do { */
        escolher = prompt("Escolha o seu produto (A, B ou C)").toUpperCase();
    /* }while ( escolher!="A" || escolher!="B" || escolher!="C" ); */

    return escolher;
}

function valorUnitario(x){
    let preco, iva, desconto;
    
    switch(x){
        case 'A':
            preco = 16.50;
            iva = 0.17;
            desconto = 0.10;

            alert("O produto A custa " + preco + ". Tem um IVA de " + (preco*iva).toFixed(3) + ". E com desconto fica a " + (preco*desconto).toFixed(3));
        case 'B':
            preco = 6250.00;
            iva = 0.12;
            desconto = 0.05;

            alert("O produto B custa " + preco + ". Tem um IVA de " + (preco*iva).toFixed(3) + ". E com desconto fica a " + (preco*desconto).toFixed(3));
        case 'C':
            preco = 22500;
            iva = 0.05;
            desconto = 0.03;

            alert("O produto A custa " + preco + ". Tem um IVA de " + (preco*iva).toFixed(3) + ". E com desconto fica a " + (preco*desconto).toFixed(3));
    }
}