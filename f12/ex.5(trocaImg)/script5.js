function alteraImagem(){
    let img = document.querySelector("img");

    if(img.getAttribute("src", "images/chuva.jpg")){
        img.setAttribute("src", "images/sol.jpg");
    } else{
        img.setAttribute("src", "images/chuva.jpg");
    }
}