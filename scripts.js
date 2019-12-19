var bg = new Image();
var slonce = new Image();
var merkury = new Image();
var wenus = new Image();
var ziemia = new Image();
var mars = new Image();
var jowisz = new Image();
var saturn = new Image();
var uran = new Image();
var neptun = new Image();


bg.src = 'img/stars.jpg';
slonce.src = 'img/slonce.png';

wenus.src = 'img/wenus.png';
ziemia.src = 'img/ziemia.png';
mars.src = 'img/mars.png';

window.onload = function(){
        
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    cw  = canvas.width,
    ch  = canvas.height,
    time = 1;
    
       
  function circle(radius,color,x,y){
    x = typeof x !== "undefined" ? x : cw/2;
    y = typeof y !== "undefined" ? y : ch/2;
    
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI,true);   
  
    ctx.fill();
    ctx.closePath();
  }
  
  function circleStroke(radius,strokeColor,x,y,lineWidth){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,true);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.closePath();
  }
  
  
    
  function animate(){
    
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cw,ch);
    ctx.closePath();
    
        
    //Sun - center
    ctx.drawImage(bg,0,0);
    ctx.translate(cw/2,ch/2);
    ctx.drawImage(slonce,-25,-25,50,50);
    
    
    //Merkury
    ctx.rotate(time / 30);  
    ctx.translate(40,0);
    circle(3.8,"#898989",0,0);              
    ctx.translate(-40,0);   
    
    //Wenus
    ctx.rotate(time / 100 - (time / 90));   
    ctx.translate(60,0);
    ctx.drawImage(wenus,0,0,30,30);
    
    ctx.translate(-60,0);
   
    
    //Ziemia
    ctx.rotate(time / 100 - (time / 80));
    ctx.translate(90,0);
    ctx.drawImage(ziemia,0,0,30,30);

    
    ctx.translate(-90,0);
    
    
    //Mars
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(120,0);
    ctx.drawImage(mars,0,0,15,15);
      
    
    
    ctx.translate(-120,0);
  
    
    //Jowisz
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(240,0);
    circle(45,"#ef602c",0,0);
    
    ctx.translate(-240,0);
   
    
    //Saturn
    ctx.rotate(time / 120 - (time / 90));
    ctx.translate(340,0);
    circle(35,"#c76743",0,0);
    
    
  
    ctx.translate(-340,0);

    
    //Uran
    ctx.rotate(time / 180 - (time / 140));
    ctx.translate(-420,0);
    circle(23,"#b843c7",0,0);
    
    ctx.translate(420,0);
  
    //Neptun
    ctx.rotate(time / 160 - (time / 140));
    ctx.translate(-480,0);
    circle(20,"#43aec7",0,0);
    
    
    ctx.restore();
    time++;

    window.requestAnimationFrame(animate);
  }
  
    window.requestAnimationFrame(animate);
}