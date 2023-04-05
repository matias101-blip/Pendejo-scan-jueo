//Eklixoz estuvo aqui uwu
var imagenes = [
    //aqui señor joto  empieza el arreglo de la imagen
    //solo duplique la 1 y 2, hasta hacer unas 50
    //si duplica desde la 3 tiene que agregar la "," al final
    //por eso mejor la 1 y 2 porque ya la tienes, y deja la ojos.jpg en ultimo
    {
        src: "img/1.jpg",
        respuesta: "La respuesta de la imagen 1 es: DEATH NOTE"
    },
    {
        src: "img/2.jpg",
        respuesta: "La respuesta de la imagen 2 es: DRAGON BALL Z"
    },
    {
      src: "img/Nisekoi.jpg",
      respuesta: "La respuesta de la imagen 3 es: Nisekoi"
    },
    {
        src: "img/3.jpg",
        respuesta: "La respuesta de la imagen 2 es: SAILOR MOON"
    },
    {
        src: "img/nier.png",
        respuesta: "La respuesta de la imagen 2 es: NIER AUTOMATA"
    },
    {
        src: "img/ojos.jpg",
        respuesta: "La respuesta de la imagen 3 es: MIRAME A LOS OJOS"
    }
];

var indice = 0;
var tiempoRestante = 60; // tiempo en segundos
var temporizador = setInterval(actualizarTiempo, 1000); // inicia el temporizador

// función que actualiza el tiempo restante y muestra la respuesta si el tiempo se acaba
function actualizarTiempo() {
    tiempoRestante--;

    if (tiempoRestante <= 0) {
        clearInterval(temporizador); // detiene el temporizador
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("respuesta").innerHTML = imagenes[indice].respuesta;
        setTimeout(siguienteImagen, 5000); // pasa automáticamente a la siguiente imagen después de 5 segundos
    }

    document.getElementById("tiempo").innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";
}

function mostrarRespuesta() {
    clearInterval(temporizador); // detiene el temporizador
    document.getElementById("respuesta").style.display = "block";
    document.getElementById("respuesta").innerHTML = imagenes[indice].respuesta;
    setTimeout(siguienteImagen, 5000); // pasa automáticamente a la siguiente imagen después de 5 segundos
}

function siguienteImagen() {
    clearInterval(temporizador); // detiene el temporizador
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
        alert("Ya hemos llegado a la \u00FAltima imagen del quiz. Gracias por participar");
    }
    document.getElementById("imagen").src = imagenes[indice].src;
    document.getElementById("respuesta").style.display = "none";
    tiempoRestante = 60; // reinicia el tiempo restante
    document.getElementById("tiempo").innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";
    temporizador = setInterval(actualizarTiempo, 1000); // inicia el temporizador de nuevo
}
function anteriorImagen() {
    clearInterval(temporizador); // detiene el temporizador
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    document.getElementById("imagen").src = imagenes[indice].src;
    document.getElementById("respuesta").style.display = "none";
    tiempoRestante = 60; // reinicia el tiempo restante
    document.getElementById("tiempo").innerHTML = "Tiempo restante: " + tiempoRestante + " segundos";
    temporizador = setInterval(actualizarTiempo, 1000); // inicia el temporizador de nuevo
}
