var Som;
var SafariI, Safari, MGrande, CCgrande, Programadora; //Imagens;
var Macaco, xMacaco = 70; yMacaco = 310; lMacaco = 140; aMacaco = 200; //Imagem e coordenadas;
var Coelho, xCoelho = 260; yCoelho = 310; lCoelho = 120; aCoelho = 200; //Imagem e coordenadas;
var Banana, xB1 = 150, xB2 = 250, xB3 = 200, xB4 = 380, yB1 = 200, yB2 = 350, yB3 = 400, yB4 = 225; //Imagem e coordenadas;
var Cenoura, xC1 = 150, xC2 = 250, xC3 = 200, xC4 = 380, yC1 = 200, yC2 = 350, yC3 = 400, yC4 = 225; //Imagem e coordendas;
var xMenu = 148, yMenu1 = 190, yMenu2 = 280, yMenu3 = 375;//Coordenada do menu;
var xVoltar = 400; yVoltar = 12; lVoltar = 80; aVoltar = 30; //Coordenadas de voltar;
var x = 400, xA = 300, x1 = 175, x2 = 255, y = 400, yA = 380, y1 = 260; y2 = 260; y3 = 310;
var largura = 200, lA = 100, l1 = 50, altura = 50, aA = 30; //Coordenadas;
var tela = 1;
var Coletar = true; //Coletor de frutas;
var score = 0; //Pontuação;
var time = 0; //Tempo;
var clock = 0; //Relogio;


//Função de imagens
function preload(){
  SafariI = loadImage('assets/Safari-inicial.jpg');
  Safari = loadImage('assets/Safari.jpg');
  Macaco = loadImage('assets/Macaco.png');
  Coelho = loadImage('assets/Coelho.png');
  MGrande = loadImage('assets/MGrande.png');
  CGrande = loadImage('assets/CGrande.png');
  Cenoura = loadImage('assets/Cenoura.png');
  Banana = loadImage('assets/Banana.png');
  Programadora = loadImage('assets/Programadora.jpg');
  soundFormats('mp3', 'wav');
  Som = loadSound('assets/Musica.wav', loadOpen);
}

//Função do som
function loadOpen(){
   Som.play();
}
  

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
//Tela do Menu
  if(tela == 1){
    background(SafariI, 500, 500);

//Menu com três opções
    
//Iniciar do Jogo
    
    textAlign(CENTER);
    textSize(30); 
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 +altura){
      stroke(20);
      fill(190, 255, 220);
      rect(xMenu, yMenu1, largura, altura, 15);
      if(mouseIsPressed){
        tela = 2;
      }
    }
    fill(20);
    noStroke();
    text("Iniciar", 250, 225);
  
//Créditos do Jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(20);
      fill(190, 255, 220);
      rect(xMenu, yMenu2, largura, altura, 15);
      if(mouseIsPressed){
        tela = 3;
      }
    }
    fill(20);
    noStroke();
    text("Créditos", 250, 315);
  
//Informações do Jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(20);
      fill(190, 255, 220);
      rect(xMenu, yMenu3, largura, altura, 15);
      if(mouseIsPressed){
        tela = 4;
      }
    }
    fill(20);
    noStroke();
    text("Instruções", 252, 408); 
  }

//Jogo em ação

//Iniciar Jogo

  else if(tela == 2){
   background(Safari, 500, 500);
   
   fill(190, 255, 220);
   rect(100, 165, 300, 50, 15);
   textSize(30);
   fill(20);
   noStroke();
   text("Escolha seu avatar!", 250, 200);
    
//Avatar Macaco
    
    if(mouseX > xMacaco && mouseX < xMacaco + lMacaco && mouseY > yMacaco && mouseY <  yMacaco + aMacaco){
   stroke(20);
   fill(190, 255, 220);
   rect(xMacaco, yMacaco, lMacaco, aMacaco, 15);
     if(mouseIsPressed){
       tela = 5;
     }
     
}
    image(MGrande, 60, 345);
    
//Avatar Coelho
    
   if(mouseX > xCoelho && mouseX < xCoelho + lCoelho && mouseY > yCoelho && mouseY <  yCoelho + aCoelho){
   stroke(20);
   fill(190, 255, 220);
   rect(xCoelho, yCoelho, lCoelho, aCoelho, 15);
     if(mouseIsPressed){
       tela = 8;
     }
     
}
   image(CGrande, 200, 310);
   
//Tecla Voltar
    
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 33);
}
    
//Créditos do Jogo
    
  else if(tela == 3){
    background(Safari, 500, 500);
    
   fill(190, 255, 220);
   rect(150, 70, 200, 40, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("PROGRAMADORA", 250, 100);
    
   fill(190, 255, 220);
   rect(10, 125, 185, 155, 15);
   image(Programadora, 15, 135);
   
   fill(190, 255, 220);
   rect(210, 125, 280, 165, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("Ana Carolina do Nascimento", 350, 150);
   text("Graduanda do Bacharel em\nCiência e Tecnologia, na\nUniversidade Federal do\nRio Grande do Norte.", 350, 200);
    
   fill(190, 255, 220);
   rect(160, 325, 180, 40, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("EDUCADOR(A)", 250, 350);
    
   fill(190, 255, 220);
   rect(160, 375, 180, 30, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("Desconhecido(a)", 250, 395);
    

    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
  }
  
//Instruções do Jogo
  else if(tela == 4){
   background(Safari, 500, 500);
    
   fill(190, 255, 220);
   rect(10, 45, 480, 190, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("Jogo criado para alunos do 3º ano do fundamental\ncom o intuito de incentivar a resolução\nde operações matematicas.\n(EF03MA05)Utilizar diferentes procedimentos\nde cálculo mental e escrito para resolver\nproblemas significativos envolvendo adição\ne subtração com números naturais", 250, 70);
   fill(190, 255, 220);
   rect(10, 245, 480, 210, 15);
   textSize(20);
   fill(20);
   noStroke();
   text("Modo de uso:\nPrimeiro use o mouse para selecionar o seu avatar.\nEm seguida use as setas do teclado\npara mover seu avatar até os objetos.\nTente pegar o maior número de objetos.\n Ao final do tempo,\nresolva as operações matemáticas.", 250, 265);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
//Começou o Jogo
  
  if(tela == 5){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Banana, xB1, yB1, 50, 50);
  image(Banana, xB2, yB2, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Macaco, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xB1, yB1, x, y) < 30){
    if(Coletar){
      if(yB1==100){
        yB1 = 300;
         score++
}
      else{
        yB1 = 100;
      }
}
  }
  
  if(dist(xB2, yB2, x, y) < 30){
    if(Coletar){
      if(yB2==150){
        yB2 = 200;
         score++
}
      else{
        yB2 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==150){
    tela = 11;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 6){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Banana, xB3, yB3, 50, 50);
  image(Banana, xB4, yB4, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Macaco, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xB3, yB3, x, y) < 30){
    if(Coletar){
      if(yB3==100){
        yB3 = 300;
         score++
}
      else{
        yB3 = 100;
      }
}
  }
  
  if(dist(xB4, yB4, x, y) < 30){
    if(Coletar){
      if(yB4==150){
        yB4 = 200;
         score++
}
      else{
        yB4 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==250){
    tela = 14;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 7){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Banana, xB1, yB1, 50, 50);
  image(Banana, xB2, yB2, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Macaco, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xB1, yB1, x, y) < 30){
    if(Coletar){
      if(yB1==100){
        yB1 = 300;
         score++
}
      else{
        yB1 = 100;
      }
}
  }
  
  if(dist(xB2, yB2, x, y) < 30){
    if(Coletar){
      if(yB2==150){
        yB2 = 200;
         score++
}
      else{
        yB2 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==300){
    tela = 16;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 8){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Cenoura, xC1, yC1, 50, 50);
  image(Cenoura, xC2, yC2, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Coelho, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xC1, yC1, x, y) < 30){
    if(Coletar){
      if(yC1==100){
        yC1 = 300;
         score++
}
      else{
        yC1 = 100;
      }
}
  }
  
  if(dist(xC2, yC2, x, y) < 30){
    if(Coletar){
      if(yC2==150){
        yC2 = 200;
         score++
}
      else{
        yC2 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==150){
    tela = 11.1;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 9){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Cenoura, xC3, yC3, 50, 50);
  image(Cenoura, xC4, yC4, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Coelho, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xC3, yC3, x, y) < 30){
    if(Coletar){
      if(yC3==100){
        yC3 = 300;
         score++
}
      else{
        yC3 = 100;
      }
}
  }
  
  if(dist(xC4, yC4, x, y) < 30){
    if(Coletar){
      if(yC4==150){
        yC4 = 200;
         score++
}
      else{
        yC4 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==250){
    tela = 14.1;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 10){
   background(Safari, 500, 500);
   time++;
    
   fill(0, 190, 90);
   rect(50, 50, 400, 400, 15);
    
    imageMode(CENTER);
  if(Coletar){
  image(Cenoura, xC1, yC1, 50, 50);
  image(Cenoura, xC2, yC2, 50, 50);
}
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  image(Coelho, x, y, 50, 50);
  imageMode(CORNER);
  
  if(dist(xC1, yC1, x, y) < 30){
    if(Coletar){
      if(yC1==100){
        yC1 = 300;
         score++
}
      else{
        yC1 = 100;
      }
}
  }
  
  if(dist(xC2, yC2, x, y) < 30){
    if(Coletar){
      if(yC2==150){
        yC2 = 200;
         score++
}
      else{
        yC2 = 150;
      }
}
  }
  
  fill(0);
  textSize(18);
  text("Pontuação: " + score, 100, 25);
    
  clock = (time/10).toFixed(0);
  text("Tempo: " + clock, 100, 45);
  if(clock==300){
    tela = 16.1;
  }
   
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}

  if(tela == 11){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS RESOLVER UMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "7 + 13 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("18", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 13;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("20", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 11.1){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS RESOLVER UMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "7 + 13 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("18", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 13.1;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("20", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 12){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VOCÊ ERROU!\n TENTE NOVAMENTE", 250, 200);
    
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
  } //Errou
  
  if(tela == 13){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("EXCELENTE! \n VOCÊ ACERTOU!", 250, 200);
    
    if(mouseX > xA && mouseX < xA + lA && mouseY > yA && mouseY <  yA + aA){
   stroke(20);
   fill(190, 255, 220);
   rect(xA, yA, lA, aA, 15);
     if(mouseIsPressed){
       tela = 6;
     }
     
}
   textSize(20);
   fill(0, 190, 0);
   noStroke();
   text("Avançar", 350, 400);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
   
} //Acertou1
  
  if(tela == 13.1){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("EXCELENTE! \n VOCÊ ACERTOU!", 250, 200);
    
    if(mouseX > xA && mouseX < xA + lA && mouseY > yA && mouseY <  yA + aA){
   stroke(20);
   fill(190, 255, 220);
   rect(xA, yA, lA, aA, 15);
     if(mouseIsPressed){
       tela = 9;
     }
     
}
   textSize(20);
   fill(0, 190, 0);
   noStroke();
   text("Avançar", 350, 400);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
   
}

  if(tela == 14){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS MAIS UMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "15 - 12 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("5", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 15;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("3", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 14.1){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS MAIS UMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "15 - 12 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("5", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 15.1;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("3", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 15){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("EXCELENTE! \n VOCÊ ACERTOU!", 250, 200);
    
    if(mouseX > xA && mouseX < xA + lA && mouseY > yA && mouseY <  yA + aA){
   stroke(20);
   fill(190, 255, 220);
   rect(xA, yA, lA, aA, 15);
     if(mouseIsPressed){
       tela = 7;
     }
     
}
   textSize(20);
   fill(0, 190, 0);
   noStroke();
   text("Avançar", 350, 400);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
   
} //Acertou2
  
  if(tela == 15.1){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("EXCELENTE! \n VOCÊ ACERTOU!", 250, 200);
    
    if(mouseX > xA && mouseX < xA + lA && mouseY > yA && mouseY <  yA + aA){
   stroke(20);
   fill(190, 255, 220);
   rect(xA, yA, lA, aA, 15);
     if(mouseIsPressed){
       tela = 10;
     }
     
}
   textSize(20);
   fill(0, 190, 0);
   noStroke();
   text("Avançar", 350, 400);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
   
}
  
  if(tela == 16){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS PARA A ÚLTIMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "35 + 15 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("45", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 17;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("50", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 16.1){
  background(Safari, 500, 500);
    
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("VAMOS PARA A ÚLTIMA EQUAÇÃO!", 250, 200);
   textSize(30);
   text("Quanto é:" + "\n" + "35 + 15 =", 250, 250);
    
   if(mouseX > x1 && mouseX < x1 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x1, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 12;
     }
     
}
   textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("45", 200, 350);
    
    if(mouseX > x2 && mouseX < x2 + l1 && mouseY > y3 && mouseY <  y3 + altura){
   stroke(20);
   fill(190, 255, 220);
   rect(x2, y3, l1, altura, 15);
     if(mouseIsPressed){
       tela = 17;
     }
     
}
    textSize(40);
   fill(0, 190, 0);
   noStroke();
   text("50", 280, 350);
  
   if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
}
  
  if(tela == 17){
  background(Safari, 500, 500);
  
   fill(255);
   rect(50, 50, 400, 400, 15);
    
   textSize(20);
   fill(0,190,0);
   noStroke();
   text("PARABÉNS! \n VOCÊ VENCEU!", 250, 200);
    
    if(mouseX > xVoltar && mouseX < xVoltar + lVoltar && mouseY > yVoltar && mouseY < yVoltar + aVoltar){
   stroke(20);
   fill(190, 255, 220);
   rect(xVoltar, yVoltar, lVoltar, aVoltar, 15);
     if(mouseIsPressed){
      tela = 1;
   }
}
   textSize(20);
   fill(20);
   noStroke();
   text("Voltar", 440, 35);
   
} //Fim de jogo
}