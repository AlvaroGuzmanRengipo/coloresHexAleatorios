// Seleccionar los elementos del DOM
const boton = document.querySelector('button'); //retorna el primer elemento con la etiqueta button
const color = document.getElementById('color');

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHEX = '#';
    for(let i = 0; i < 6; i++){
        let indAleatorio = Math.floor(Math.random() * 16); //floor para redondear el numero entre parentesis
        colorHEX += digitos[indAleatorio];
    }
    return colorHEX;
}

boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio; // actualiza el color en el parrafo o texto
    document.body.style.backgroundColor = colorAleatorio; //actualiza el color de fondo
});