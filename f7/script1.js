/* Desenvolva um programa, em Javascript, que leia 2 números e apresente ao utilizador, a
média destes.
Para a resolução deste exercício é recomendada a utilização de funções.
 */

/* cp */
let a, b;

document.write("A média dos valores é " + fazMedia(a,b));

function fazMedia(x,y){
    let media;

    do {
        x = Number(prompt("Indique do 1.º valor"));
        y = Number(prompt("Indique do 2.º valor"));
    } while (isNaN(x) || isNaN(y));

    media = (x + y) / 2;
    return media;
}
