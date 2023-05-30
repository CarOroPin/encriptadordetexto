const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none";
const h2 = document.querySelector(".mensaje_h2");
const h3 = document.querySelector(".mensaje_h3");

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textEncriptado = encriptar(textArea.value)
        mensaje.value = textEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
        h2.style.display="none";
        h3.style.display="none";
    }
}

function encriptar(stringEncriptar){
    let llavesEncriptacion = [["e", "enter"],
                              ["i", "imes"],
                              ["a", "ai"],
                              ["o", "ober"],
                              ["u", "ufat"]];

    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i=0; i<llavesEncriptacion.length; i++){
        if(stringEncriptar.includes(llavesEncriptacion[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(llavesEncriptacion[i][0],llavesEncriptacion[i][1]);
        }
    }
    return stringEncriptar;
}

function btnDesencriptar(){
    const textEncriptado = desencriptar(textArea.value);
    mensaje.value= textEncriptado;
    textArea.value= "";
}

function desencriptar(stringDesencriptar){
    let llavesEncriptacion = [["e", "enter"],
                              ["i", "imes"],
                              ["a", "ai"],
                              ["o", "ober"],
                              ["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i=0; i<llavesEncriptacion.length; i++){
        if(stringDesencriptar.includes(llavesEncriptacion[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(llavesEncriptacion[i][1],llavesEncriptacion[i][0]);
        }
    }
    return stringDesencriptar;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}  

