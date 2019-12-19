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


bg.src = 'img/gwiazdy.jpg';
slonce.src = 'img/slonce.png';
merkury.src = 'img/merkury.png'
wenus.src = 'img/wenus.png';
ziemia.src = 'img/ziemia.png';
mars.src = 'img/mars.png';
jowisz.src = 'img/jowisz.png'
saturn.src = 'img/saturn.png';
uran.src = 'img/uran.png'
neptun.src = 'img/neptun.png';

window.onload = function(){
        
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width  = canvas.width,
    height  = canvas.height,
    time = 1;
    
    
  function animate(){
    
    ctx.save();
    ctx.beginPath();
    ctx.fillRect(0,0,width,height);
    ctx.closePath();
    
    //gwiazdy
    ctx.drawImage(bg,0,0);
        
    //Slonce
    ctx.translate(width/2,height/2);
    ctx.drawImage(slonce,-25,-25,50,50);
    
    //Merkury
    ctx.rotate(time / 30);  
    ctx.translate(40,0);
    ctx.drawImage(merkury,-5,-5,10,10);            
    ctx.translate(-40,0);   
    
    //Wenus
    ctx.rotate(time / 100 - (time / 90));   
    ctx.translate(60,0);
    ctx.drawImage(wenus,-15,-15,30,30);
    ctx.translate(-60,0);
   
    //Ziemia
    ctx.rotate(time / 100 - (time / 80));
    ctx.translate(90,0);
    ctx.drawImage(ziemia,-15,-15,30,30);
    ctx.translate(-90,0);
    
    //Mars
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(120,0);
    ctx.drawImage(mars,-7.5,-7.5,15,15);
    ctx.translate(-120,0);
  
    //Jowisz
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(240,0);
    ctx.drawImage(jowisz,-45,-45,90,90);
    ctx.translate(-240,0);
   
    //Saturn
    ctx.rotate(time / 120 - (time / 90));
    ctx.translate(340,0);
    ctx.drawImage(saturn,-17.5,-17.5,150,150);
    ctx.translate(-340,0);

    //Uran
    ctx.rotate(time / 180 - (time / 140));
    ctx.translate(-420,0);
    ctx.drawImage(uran,-23,-23,46,46);
    ctx.translate(420,0);
  
    //Neptun
    ctx.rotate(time / 160 - (time / 140));
    ctx.translate(-480,0);
    ctx.drawImage(neptun,-20,-20,40,40);
    
    
    ctx.restore();
    time++;

    window.requestAnimationFrame(animate);
  }
  
    window.requestAnimationFrame(animate);
}