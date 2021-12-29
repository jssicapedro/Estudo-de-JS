let numero, produto=1;

for (let i=1; i<=5; i++) {
    numero = Number(prompt("Indique 5 numeros para fazer o seu produto\nIndique o valor " + i));

    produto=produto*numero;
}

alert("O produto dos 5 numeros inceridos deu " + produto);