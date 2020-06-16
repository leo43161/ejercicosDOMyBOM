//Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let numeroMagico = Math.floor(Math.random() * 10) + 1,
    interfaz1 = document.getElementById("interfaz-1"),
    interfaz2 = document.getElementById("interfaz-2"),
    bComenzar = document.getElementById("bComenzar"),
    bAdivinar = document.getElementById("bAdivinar"),
    iAdivinar = document.getElementById("iAdivinar");


function comenzar() {
    interfaz1.className = "text-center d-none";
    interfaz2.className = "";
}

function adivinar() {
    let numero = parseInt(iAdivinar.value);
    console.log(numero);
    console.log(numeroMagico);
    if (numero > 0 && numero < 11) {
        if (numero == numeroMagico) {
            alert("Acertaste");
        } else if (numero < numeroMagico) {
            alert("El numero es menor, intentalo de nuevo");
        } else if (numero > numeroMagico) {
            alert("El numero es mayor, intentalo de nuevo")
        }
    }else {
        alert("Numero no valido");
    }
}