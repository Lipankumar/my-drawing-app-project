const canvas=document.getElementById("canvas");
const increaseBtn=document.getElementById("increase");
const decreaceBtn=document.getElementById("decrease");
const changeColor=document.getElementById("color");
const sizeEl=document.getElementById("size");
const clearBtn=document.getElementById("clear");
const context = canvas.getContext('2d');
let size=10;
changeColor.value="black"
let color=changeColor.value;
let isPressed = false;
let x
let y
canvas.addEventListener("mousedown",(e)=> {
    isPressed=true;
    x=e.offsetx;
    y=e.offsety;
});
canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
   
});
document.addEventListener("mouseup",(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
});
function  drawCircle(x,y) {
   context.beginPath();
   context.arc(x, y, size, 0, Math.PI * 2)
   context.fillStyle = color
   context.fill()
}
function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
}
function setSize() {
    sizeEl.innerText=size;
}
increaseBtn.addEventListener("click",()=>{
    size=size+5;
    if(size>50){
        size=50;
    }
    setSize();
})
decreaceBtn.addEventListener("click",()=>{
    size=size-5;
    if(size<5){
        size=5;
    }
    setSize();
})
changeColor.addEventListener("change",(e)=>color=e.target.value)
clearBtn.addEventListener("click",()=>context.clearRect(0,0,canvas.width,canvas.height))