function adicionarItem(){ 
//buscar texto da caixa
        let texto = document.getElementById("item");
//criar li
        let li = document.createElement("li");
//chama o texto para dentro do li
        li.innerHTML = texto.value;
//colocar texto e li  dentro do ul
        document.getElementById("lista").appendChild(li);
//apagar texto da caixa
        texto.value = "";
        
}

function limpar(){
        document.getElementById("lista").innerHTML = "";
}

/* 
buscar texto da caixa
criar li
colocar texto e li  dentro do ul
apagar texto da caixa
*/