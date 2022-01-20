function adicionarItem(){
        let txt = document.getElementById("item");

        let lista = document.getElementById("lista");

        let li = document.createElement("li");
        
        li.innerHTML = txt.value;
        
        lista.appendChild(li);

        txt.value="";
}

function limpar(){
        lista.innerHTML = "";
}