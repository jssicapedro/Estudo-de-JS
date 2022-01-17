/* cp */
let n, par;

n = lerNumeros();
document.write(n);
/* par = mostrarPar(n); */


function lerNumeros(){
    let n, v=[];

    for( i=1; i<=100; i++){
        n = i;

        if(n%2==0){
           v.push(n); 
        }
        
    }

    return v;
}