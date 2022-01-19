function textBox(){
    let text = document.getElementById("box").value;

    document.getElementsByTagName("div")[0].innerHTML= text;


    /* sem a div seria:
     
    alert(document.getElementById("box").value)
    */
}