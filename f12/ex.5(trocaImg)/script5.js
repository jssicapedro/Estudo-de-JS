function mudaImagem(){
//chama a imagem
    let img = document.querySelector("img");
//se esticer images/chuva, fica sol, sn chuva
    if(img.getAttribute("src") == "images/chuva.jpg"){
        img.setAttribute("src", "images/sol.jpg");
        img.setAttribute("alt", "sol");
    } else {
        img.setAttribute("src", "images/chuva.jpg");
        img.setAttribute("alt", "chuva");
    }
}