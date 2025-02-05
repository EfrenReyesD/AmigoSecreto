// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroDigitados = [];
function agregarAmigo() {
    let nombreEntrada = document.getElementById("amigo").value;

    if(nombreEntrada != "") {
        //console.log(nombreEntrada);

        amigos.push(nombreEntrada);
        crearNuevoComponente();
        document.getElementById("amigo").value = "";
    }else{
        alert("Ingrese un nombre");
    }

    //console.log(amigos);

}


function crearNuevoComponente() {
    let listaAmigos = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = amigos[amigos.length - 1];
    listaAmigos.appendChild(li);
}


function sortearAmigo() {
    //console.log(amigos.length);
    if(amigos.length == 0){
        alert("Registra a tus amigos");
    }else{
        let numeroRandom = generarNumero();
        console.log(numeroRandom);
        let textAmigoSecreto = document.getElementById("textAmigoSecreto");
        textAmigoSecreto.textContent = "Tu Amigo secreto es: "
        let amigoSecreto = document.getElementById("amigoSecreto");
        amigoSecreto.textContent = amigos[numeroRandom];
        //console.log(numeroRandom);
    }
    
}

function generarNumero() {
    let numeroX = Math.floor(Math.random()*(amigos.length));
    if(numeroDigitados.includes(numeroX)){
        if(numeroDigitados.length != amigos.length){
            return generarNumero();
        }else{
            alert("ya fueron sorteados todos los amigos");
            agregarTextById("btnSortear", "Reiniciar");
            document.getElementById("btnSortear").onclick = ReiniciarJuego;
            return numeroDigitados[numeroDigitados.length - 1];
        }
        
    }else{
        console.log(` el numero a retornar es ${numeroX}`)
        numeroDigitados.push(numeroX);
        return numeroX;   
    }  
}

function agregarTextById(elementId, contenido) {
    document.getElementById(elementId).lastChild.textContent = contenido;
}

function ReiniciarJuego(){
    amigos = [];
    numeroDigitados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    agregarTextById("textAmigoSecreto", "");
    agregarTextById("amigoSecreto", "");
    document.getElementById("btnSortear").onclick = sortearAmigo;
    agregarTextById("btnSortear", "Sortear amigo")
}