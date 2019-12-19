function showPlanet(index){
  var tekst0 = "Słońce" ;
  var tekst1 = "Pierwsza najmniejsza i najbliższa Słońcu planeta Układu Słonecznego. Temperatura powierzchni waha się od −183 °C do 427 °C. Jest planetą skalistą o średnicy 4879 km. Odległość od Słońca wynosi 58 milionów km. Rok trwa 88 dni. Powierzchnia Merkurego niezwykle przypomina powierzchnię ziemskiego Księżyca. Posiada największa ilość kraterów w Układzie Słonecznym oraz strefy ciemne i jasne, które ze sobą sąsiadują. Kratery powstały w wyniku bombardowania przez meteoryty i aktywność wulkaniczną planety. Merkuriańskie jądro zawiera więcej żelaza niż jakakolwiek planeta Układu Słonecznego. Merkury nie posiada księżyców jak i atmosfery, posiada za to cienką egzosferę." ;

  var tekst2 = "Wenus to druga pod względem odległości od Słońca planeta Układu Słonecznego. Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu. Jej obserwowana wielkość gwiazdowa jest wystarczająca, aby światło odbite od Wenus powodowało powstawanie cieni. Ponieważ Wenus jest bliżej Słońca niż Ziemia, zawsze jest widoczna w niewielkiej odległości kątowej od niego. Odległość Wenus od Ziemi zmienia się w zakresie od około 40 mln km do około 259 mln km." ;

  var tekst3 = "Ziemia" ;

  var tekst4 = "Mars" ;

  var tekst5 = "Jowisz" ;

  var tekst6 = "Saturn" ;

  var tekst7 = "Uran" ;

  var tekst8 = "Neptun" ;
  
  
  switch (index) {
  case 0:
    document.getElementById("planetDescription").innerHTML = tekst0;
    document.getElementById("planetPic").innerHTML="<img src=\"img/slonce.png\">"
  break;
  case 1:
    document.getElementById("planetDescription").innerHTML = tekst1;
    document.getElementById("planetPic").innerHTML="<img src=\"img/merkury.png\">"
  break;
  case 2:
    document.getElementById("planetDescription").innerHTML = tekst2;
    document.getElementById("planetPic").innerHTML="<img src=\"img/wenus.png\">"
  break;
  case 3:
    document.getElementById("planetDescription").innerHTML = tekst3;
    document.getElementById("planetPic").innerHTML="<img src=\"img/ziemia.png\">"
  break;
  case 4:
    document.getElementById("planetDescription").innerHTML = tekst4;
    document.getElementById("planetPic").innerHTML="<img src=\"img/mars.png\">"
  break;
  case 5:
    document.getElementById("planetDescription").innerHTML = tekst5;
    document.getElementById("planetPic").innerHTML="<img src=\"img/jowisz.png\">"
  break;
  case 6:
    document.getElementById("planetDescription").innerHTML = tekst6;
    document.getElementById("planetPic").innerHTML="<img src=\"img/saturn.png\">"
  break;
  case 7:
    document.getElementById("planetDescription").innerHTML = tekst7;
    document.getElementById("planetPic").innerHTML="<img src=\"img/uran.png\">";
  break;
  case 8:
    document.getElementById("planetDescription").innerHTML = tekst8
    document.getElementById("planetPic").innerHTML="<img src=\"img/neptun.png\">"
  break;
  }
  }

 

  
  window.onload = function(){
    
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width  = canvas.width,
    height  = canvas.height,
    time = 0;
    
    
    function animate(){
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