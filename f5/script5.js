var menu, qtd, preco, precoT=0, iva, ivaT=0, desconto, descontoT=0;

do {
    menu = prompt("Indique o produto pretendido\nA-16.50€\nB-6250€\nC-22500€\nS-sair").toUpperCase();
    
    if(menu!="S"){
        qtd = parseInt(prompt("Indique a quantidade do produto"));
    }

    switch (menu) {
        case "A":
            preco = qtd * 16.50;
            iva = preco * 0.17;
            desconto = preco * 0.10;
            precoT = precoT + (preco - desconto); 
            ivaT = ivaT + iva;
            descontoT = descontoT + desconto;
            break;
        case "B":
            preco = qtd * 6250;
            iva = preco * 0.12;
            desconto = preco * 0.05;
            precoT = precoT + (preco - desconto); 
            ivaT = ivaT + iva;
            descontoT = descontoT + desconto;
            break;
        case "C":
            preco = qtd * 22500;
            iva = preco * 0.05;
            desconto = preco * 0.03;
            precoT = precoT + (preco - desconto); 
            ivaT = ivaT + iva;
            descontoT = descontoT + desconto;
            break;
        default:
            break;
    }
    
} while (menu>="A" && menu<="C");

alert("Irá pagar " + precoT + ", " + ivaT + " só de IVA e terá " + desconto + " em descontos")