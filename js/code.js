let color
let xInicial;
let yInicial;
let estadoMouse = false;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//GET COLOR
const input = document.getElementById('input');
document.getElementById('button').addEventListener('click', () => {
    color = input.value;
});

canvas.addEventListener("mousedown", mouseActivado);
canvas.addEventListener("mouseup", mouseDesactivado);
canvas.addEventListener("mousemove", dibujarMouse);