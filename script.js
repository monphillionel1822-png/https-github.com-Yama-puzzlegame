const board=document.getElementById("gameBoard");
let snake=document.createElement("div");
snake.classList.add("snake");
let x=0,y=0;
snake.style.left=x+"px";
snake.style.top=y+"px";
board.appendChild(snake);
document.addEventListener("keydown",(e)=>{
  if(e.key=="ArrowUp") y-=20;
  if(e.key=="ArrowDown") y+=20;
  if(e.key=="ArrowLeft") x-=20;
  if(e.key=="ArrowRight") x+=20;
  x=Math.max(0,Math.min(280,x));
  y=Math.max(0,Math.min(280,y));
  snake.style.left=x+"px";
  snake.style.top=y+"px";
});
