var mouseevent="";
var last_position_x = 0;
var last_position_y = 0;
var curent_position_x = 0;
var curent_position_y = 0;
var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e)
{
    curent_position_x = e.clientX-canvas.offsetLeft;
    curent_position_y = e.clientY-canvas.offsetTop;
    if (mouseevent == "mousedown")
    {
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    ctx.moveTo(last_position_x, last_position_y);
    ctx.lineTo(curent_position_x, curent_position_y);
    ctx.stroke();
    }
    last_position_x = curent_position_x;
    last_position_y = curent_position_y;
}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(code)
{
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(code)
{
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(code)
{
    mouseevent = "mouseleave";
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}