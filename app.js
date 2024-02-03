let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

const mensajeUsuario = document.getElementById("entradaTexto2");
const textoSalida = document.getElementById("salidaTexto_texto");
const imagenSalidaTexto = document.getElementById("salidaTextoImagen");
const parrafoSalidaTexto = document.getElementById("salidaTexto_texto_parrafo");
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const advertenciaNoPermitidos = document.getElementById('advertencia');

function encriptarTexto(texto){
    
    let textoEncriptado = '';
    
    for(let indice = 0; indice < texto.length; indice++){
        const letra = texto[indice];
        if(letra === 'a'){
            textoEncriptado += a;
        } else if (letra === 'e') {
            textoEncriptado += e;
        } else if (letra === 'i') {
            textoEncriptado += i;
        } else if (letra === 'o') {
            textoEncriptado += o;
        } else if (letra == 'u') {
            textoEncriptado += u;
        } else {
            textoEncriptado += letra;
        }
    }

    return textoEncriptado
}

function desencriptarTexto(texto){

    let textoDesencriptado = '';
    
    for(let indice = 0; indice < texto.length; indice++){
        const letra = texto[indice];
        if(letra === 'a'){
            textoDesencriptado += letra;
            indice += a.length - 1;
        } else if (letra === 'e') {
            textoDesencriptado += letra;
            indice += e.length - 1;
        } else if (letra === 'i') {
            textoDesencriptado += letra;
            indice += i.length - 1;
        } else if (letra === 'o') {
            textoDesencriptado += letra;
            indice += o.length - 1;
        } else if (letra == 'u') {
            textoDesencriptado += letra;
            indice += u.length - 1; 
        } else {
            textoDesencriptado += letra;
        }
    }

    return textoDesencriptado
}

function mostrarTexto(accion){
    
    imagenSalidaTexto.setAttribute("hidden", "false");
    textoSalida.removeAttribute("hidden");
    
    if (accion === 'encriptar'){
        parrafoSalidaTexto.innerHTML = encriptarTexto(mensajeUsuario.value);
    } else {
        parrafoSalidaTexto.innerHTML = desencriptarTexto(mensajeUsuario.value); 
    }

    mensajeUsuario.value = '';

    botonEncriptar.disabled = true; 
    botonDesencriptar.disabled = true;

}

function copiarTexto(){
    navigator.clipboard.writeText(parrafoSalidaTexto.innerHTML);
    imagenSalidaTexto.removeAttribute("hidden");
    textoSalida.setAttribute("hidden", "false");
    
    botonEncriptar.disabled = false; 
    botonDesencriptar.disabled = false;
}

function verificar(caracter){
    let noPermitidos = /[A-Z]|á|é|í|ó|ú/;
    if (noPermitidos.test(caracter)){
    advertenciaNoPermitidos.style.color = 'red';
    mensajeUsuario.style.background = 'lightgray';
    botonEncriptar.disabled = true; 
    botonDesencriptar.disabled = true;
    } else{
    advertenciaNoPermitidos.style.color = 'gray';
    mensajeUsuario.style.background = 'aliceblue';
    botonEncriptar.disabled = false; 
    botonDesencriptar.disabled = false;
    }
}
