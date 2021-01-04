canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").innerHTML=color;
    width_of_line=document.getElementById("width").innerHTML=width_of_line;
    radius=document.getElementById("radius").innerHTML=radius;
    mouseEvent="mousedown";
}

function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    
    if(mouse_event=="mousedown"){
        console.log("Current position of x and y coordinates=");
        console.log("x ="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();

    }

    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

}