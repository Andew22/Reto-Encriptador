


let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let textEntrada = document.getElementById("textoEntrada")
let botonLimpiar = document.getElementById("limpiar")
let botonCopiar = document.getElementById("copiar");




function textoIngresado() {

    let texto = textoEntrada.value;
    let textoSinEspacio = texto.trim();
    return textoSinEspacio;
}
function encriptarTexto() {

    let texto = textoIngresado();

    let textoFinal="";

    for (let letra of texto) {
        
       if(letra=="e"){
        textoFinal+="enter"
       }
       else if(letra=="i"){
        textoFinal+="imes"
       }
       else if(letra=="a"){
        textoFinal+="ai"
       }
       else if(letra=="o"){
        textoFinal+="ober"
       }
       else if(letra=="u"){
        textoFinal+="ufat"
       }
       else{
           textoFinal+=letra;
       }

    }

    enviarResultado(textoFinal.trim());



}
function desencriptarTexto(){
    let texto = textoIngresado();

 
    let texto1 = texto.replace(/enter/g,'e')
    console.log(texto1)
    
    let texto2 = texto1.replace(/imes/g,'i')
    console.log(texto2)
    let texto3 =texto2.replace(/ai/g,'a')
    console.log(texto3)
    let texto4 =texto3.replace(/ober/g,'o')
    console.log(texto4)
    let texto5 = texto4.replace(/ufat/g,'u')

   
    enviarResultado(texto5.trim());


}
function enviarResultado(textoSalida){
    let textSalida = document.getElementById("textoSalida");
    textSalida.value = textoSalida
}

function limpiarCuadros(){
textEntrada.value = "";


}






botonEncriptar.onclick = encriptarTexto

botonDesencriptar.onclick = desencriptarTexto

botonLimpiar.onclick =limpiarCuadros

botonCopiar.addEventListener("click",function(e){
    console.log("dddd")
    let textSalida = document.getElementById("textoSalida");
    textSalida.select();
    document.execCommand('copy');

})





