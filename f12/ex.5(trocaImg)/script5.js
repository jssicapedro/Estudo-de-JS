let img = document.getElementsByTagName("img")[0];

function mudaImagem(){
    if( img.getAttribute("src") == "images/chuva.jpg" ){
        img.setAttribute("src", "images/sol.jpg");
        img.setAttribute("alt", "sol");
    } else {
        img.setAttribute("src", "images/chuva.jpg");
        img.setAttribute("alt", "sol");
    }
}