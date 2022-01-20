function adicionarItem(){
        var texto=document.getElementById('item');
        var li=document.createElement('li');
        li.innerHTML=texto.value;
        document.getElementById('lista').appendChild(li);
        texto.value="";
}
    
function limpar(){
        let l=document.getElementById('lista');
        l.innerHTML='';
}