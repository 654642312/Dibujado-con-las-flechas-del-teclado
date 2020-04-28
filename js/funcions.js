function mouseActivado(e){
    estadoMouse = true;
    xInicial = e.clientX;
    yInicial = e.clientY;
}

function mouseDesactivado(){
    estadoMouse = false;
}

function dibujarMouse(e){
    let xFinal = e.clientX;
    let yFinal = e.clientY;

    if(estadoMouse === true){
        dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, ctx)
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