var v1 = Number(prompt("Indique o 1.º valor"));
var v2 = Number(prompt("Indique o 2.º valor"));

var menu = Number(prompt("Escolha a operação pretendida\n1-Media\n2-Diferença\n3-Produto\n4-Divisão"));
switch (menu) {
    case 1:
        var media = (v1+v2)/2;
        alert(media);
        break;
    case 2:
        var diferenca = v1-v2;
        alert(diferenca);
        break;
    case 3:
        var produto = v1*v2;
        alert(produto);
        break;
    case 4:
        var dividir = v1/v2;
        alert(dividir);
        break;
    default:
        break;
}