function myFunction(){
    let txt = document.getElementsByClassName("exemplo");

    for(let i = 0; i < txt.length; i++){
        txt[i].style.background = "red";
    }
}
