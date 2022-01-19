let d = new Date();
let h = d.getHours();

let frase = document.getElementById("msg");

let img = document.getElementById("imagem");

let fundo = document.body.style;
    
function carregar(){
   if(h>0 && h<12){
       frase.innerHTML ="Bom dia!";
       img.setAttribute("src", "manha.jpg");
       fundo.background = "bluesky";

   } else if(h>=12 && h<20){
       frase.innerHTML = "Boa tarde!";
       img.setAttribute("src", "tarde.jpg");
       fundo.background = "lightcoral";

   } else{
       frase.innerHTML = "Boa noite!";
       img.setAttribute("src", "noite.jpg");
       fundo.background = "blue";
   }
}