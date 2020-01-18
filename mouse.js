var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");

document.addEventListener("mousedown", mouseActivado);
document.addEventListener("mouseup", mouseDesactivado);
document.addEventListener("mousemove", dibujarMouse);

var xInicial;
var yInicial;
var estadoMouse = "false";

function mouseActivado(evento){
    estadoMouse = "true";
}

function mouseDesactivado(){
    estadoMouse = "false";
}

function dibujarMouse(evento){
    var xFinal = evento.clientX;
    var yFinal = evento.clientY;

    if(estadoMouse == "true"){
        dibujarLinea("red", xInicial, yInicial, xFinal, yFinal, papel);

        xInicial =  xFinal
        yInicial = yFinal;
    }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}