 let data = new Date;
    let h = data.getHours();

    let msg = document.getElementById("msg");

    let fundo = document.body.style;

    let img = document.getElementById("imagem");
    
function carregar(){
   

    if(h>0 && h<12){
        msg.innerHTML = "Bom dia";

        fundo.background = "blusky";

        img.setAttribute("src", "manha.jpg");
    } else if( h>=12 && h<19){
        msg.innerHTML = "Boa tarde";

        fundo.background = "orange";

        img.setAttribute("src", "tarde.jpg");
    } else{
        msg.innerHTML = "Boa noite";

        fundo.background = "darkblue";

        img.setAttribute("src", "noite.jpg");
    }
}