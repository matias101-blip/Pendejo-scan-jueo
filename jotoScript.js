//Eklixoz estuvo aqui uwu
var imagenes = [
    //aqui señor joto  empieza el arreglo de la imagen
    //solo duplique la 1 y 2, hasta hacer unas 50
    //si duplica desde la 3 tiene que agregar la "," al final
    //por eso mejor la 1 y 2 porque ya la tienes, y deja la ojos.jpg en ultimo
    {
        src: "img/Boku no Hero.png",
        respuesta: "La respuesta de la imagen 1 es: Boku no Hero"
    },
    {
        src: "img/Kakegurui.png",
        respuesta: "La respuesta de la imagen 2 es: Kakegurui"
    },
    {
      src: "img/Nisekoi.jpg",
      respuesta: "La respuesta de la imagen 3 es: Nisekoi"
    },
    {
      src: "img/Akamegakill.jpg",
      respuesta: "La respuesta de la imagen 4 es: Akame Ga Kill"
    },
    {
        src: "img/SNK.png",
        respuesta: "La respuesta de la imagen 5 es: Shingeki No Kyojin"
    },
    {
      src: "img/Jujutsu-Kaisen.png",
      respuesta: "La respuesta de la imagen 6 es: Jujutsu Kaisen"
    },
    {
      src: "img/Hunter-x-Hunter.png",
      respuesta: "La respuesta de la imagen 7 es: Hunter x Hunter"
    },
    {
      src: "img/Cowboy Bebop.png",
      respuesta: "La respuesta de la imagen 8 es: Cowboy Bebop"
    },
    {
      src: "img/Assassination Classroom.png",
      respuesta: "La respuesta de la imagen 9 es: Assassination Classroom"
    },
    {
      src: "img/Deadman Wonderland.png",
      respuesta: "La respuesta de la imagen 10 es: Deadman Wonderland"
    },
    {
      src: "img/Death Note.png",
      respuesta: "La respuesta de la imagen 11 es: Death Note"
    },
    {
      src: "img/Demon Slayer.png",
      respuesta: "La respuesta de la imagen 12 es: Demon Slayer"
    },
    {
      src: "img/Dragon Ball Z.png",
      respuesta: "La respuesta de la imagen 13 es: Dragon Ball Z"
    },
    {
      src: "img/Fairy Tail.png",
      respuesta: "La respuesta de la imagen 14 es: Fairy Tail"
    },
    {
      src: "img/Fruits Basket.png",
      respuesta: "La respuesta de la imagen 15 es: Fruits Basket"
    },
    {
      src: "img/Fullmetal Alchemist Brotherhood.png",
      respuesta: "La respuesta de la imagen 16 es: Fullmetal Alchemist Brotherhood"
    },
    {
      src: "img/Kimi no Na Wa.png",
      respuesta: "La respuesta de la imgen 17 es: Kimi no Na Wa"
    },
    {
      src: "img/Naruto.png",
      respuesta: "La respuesta de la imagen 18 es: Naruto"
    },
    {
      src: "img/Neon Genesis Evangelion.png",
      respuesta: "La respuesta de la imagen 19 es: Neon Genesis Evangelion"
    },
    {
      src: "img/One Piece.png",
      respuesta: "La respuesta de la imagen 20 es: One Piece"
    },
    {
      src: "img/Quintessential Quintuplets.png",
      respuesta: "La respuesta de la imagen 21 es: Quintessential Quintuplets"
    },
    {
      src: "img/Shingatsu wa Kimi no Uso.png",
      respuesta: "La respuesta de la imagen 22 es: Shingatsu wa Kimi no Uso"
    },
    {
      src: "img/Soul Eater.png",
      respuesta: "La respuesta de la imagen 23 es: Soul Eater"
    },
    {
      src: "img/Sword Art Online.png",
      respuesta: "La respuesta de la imagen 24 es: Sword Art Online"
    },
    {
      src: "img/The Promised Neverland.png",
      respuesta: "La respuesta de la imagen 25 es: The Promised Neverland"
    },
    {
      src: "img/Tokyo Ghoul.png",
      respuesta: "La respuesta de la imagen 26 es: Tokyo Ghoul"
    },
    {
      src: "img/Toradora.png",
      respuesta: "La respuesta de la imagen 27 es: Toradora"
    },
    {
      src: "img/Yuri on Ice!!.png",
      respuesta: "La respuesta de la imagen 28 es: Yuri on ice!!"
    },
    {
      src: "img/One Punch Man.png",
      respuesta: "La respuesta de la imagen 29 es: One Punch Man"
    },
    {
      src: "img/No Game No Life.png",
      respuesta: "La respuesta de la imagen 30 es: No Game No Life"
    },
    {
      src: "img/Shokugeki no Sōma.png",
      respuesta: "La respuesta de la imagen 31 es: Shokugeki no Sōma"
    },
    {
      src: "img/Boku no Pico.png",
      respuesta: "La respuesta de la imagen 32 es: Boku no Pico"
    },
    {
        src: "img/ojos.jpg",
        respuesta: "La respuesta de la imagen 33 es: MIRAME A LOS OJOS"
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
