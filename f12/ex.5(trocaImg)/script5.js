function alteraImagem(){
    let imagem = document.querySelector("img");
    if(imagem.getAttribute("src")=="images/chuva.jpg"){
        imagem.setAttribute("src", "images/sol.jpg");
    } else {
        imagem.setAttribute("src", "images/chuva.jpg");
    }
}