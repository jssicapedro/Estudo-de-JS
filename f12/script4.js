function minusculas(){
    alert(document.getElementById("box").value.toLowerCase());
}

function maiusculas(){
    let maior = document.getElementById("box");
    maior.value = maior.value.toUpperCase() 
}

function ambas(){
    minusculas(),  maiusculas();
}