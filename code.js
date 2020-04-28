let color
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//GET COLOR
const input = document.getElementById('input');
document.getElementById('button').addEventListener('click', () => {
    color = input.value;
});

let xInicial;
let yInicial;

canvas.addEventListener("mousedown", mouseActivado);
canvas.addEventListener("mouseup", mouseDesactivado);
canvas.addEventListener("mousemove", dibujarMouse);

var estadoMouse = false;

function mouseActivado(){
    estadoMouse = true;
}

function mouseDesactivado(){
    estadoMouse = false;
}

function dibujarMouse(e){
    let xFinal = e.clientX;
    let yFinal = e.clientY;

    if(estadoMouse === true){
        dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, ctx);
        xInicial = xFinal;
        yInicial = yFinal;
    }
}

// DRAW CANVAS
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}