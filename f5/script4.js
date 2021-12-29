var menu, qtdBicicletas, dias, total, precoT=0;

do {
    menu = prompt("Indique o tipo de bicicleta que pretende alugar\nA - BTT ou Montanha\nB - Estrada\nC - Lazer\nD - Elétrica\nE - Criança\nS - Sair").toUpperCase();

    if (menu!="S") {
        qtdBicicletas = parseInt(prompt("Indique a quantidade de bibicletas que pretende alugar"));
        dias = parseInt(prompt("Indique a quantidade de dias"));
    }

    switch (menu) {
        case "A":
            total = (qtdBicicletas * dias) * 12;
            precoT=precoT+total;
            break;

        case "B":
            total = (qtdBicicletas * dias) * 10;
            precoT=precoT+total;
            break;
        case "C":
            total = (qtdBicicletas * dias) * 7.5;
            precoT=precoT+total;
            break;

        case "D":

            if(dias>=4){
                total = (qtdBicicletas * dias) * (7.5-0.15); 
            }else{
                total = (qtdBicicletas * dias) * 7.5;
            }
            precoT=precoT+total;
            break;
        
        case "E":
            total = (qtdBicicletas * dias) * 5;
            precoT=precoT+total;
            break;
        case "S":
            alert("Opção sair selecionada.\nAté á proxima");
            break;
        default:
            break;
        }
} while(menu>="A" && menu<="E");

alert("Tem um total de " + precoT + " euros a pagar");
