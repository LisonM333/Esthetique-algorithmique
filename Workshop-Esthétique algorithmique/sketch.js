// let Couleur_sugary= [' #ffb900 ','#ff9b00 ',' #ff4d00 ',' #dc00ff ','#9e00fd','#4900fc']
let Couleur_sugary= ['#ff0000','#ff7300','#9c2f00','#ff75a1','#ffc4db','#ff039a','#ffc8c2','#a80038','#be85be','#ffcb60']
let Couleur_acid= ['#fff382','#c6ff6b','#95ff00','#cdcd55','#bfdeb4','#f2dc61','#e8f1ff','#4c4cff','#94bfff','#91e051']


function setup(){
  createCanvas(4000, 600);
  background(255);
}

function noRepeat(List, element){
  let index = List.indexOf(element);
  List.splice(index, 1);
  return List;
}

function draw() {
  push();
  translate(15, 180);
  rotate(-HALF_PI);
  textSize(16);
  fill(10);
  stroke(50);
  text('Sugary', 0, 0);
  pop();
  for (let j = 0; j< 20; j++){
    let Couleurs = [...Couleur_sugary];
    for (let i = 0; i< 4; i++){
      let couleur = random(Couleurs);
      fill(couleur);
      Couleurs = noRepeat(Couleurs, couleur);
      noStroke();
      rect(200*j+20+i*40,20,40,260);
      push();
      translate(200*j+45+i*40, 270);
      rotate(-HALF_PI);
      textSize(16);
      fill(200);
      stroke(50);
      text(couleur, 0, 0);
      pop();
    }
    fill(0)
    text(j+1+'.',200*j+5,280)
  }
  push();
  translate(15, 460);
  rotate(-HALF_PI);
  textSize(16);
  fill(10);
  stroke(50);
  text('Acid', 0, 0);
  pop();
  for (let j = 0; j< 20; j++){
    let Couleurs = [...Couleur_acid];
    for (let i = 0; i< 4; i++){
      let couleur = random(Couleurs);
      fill(couleur);
      Couleurs = noRepeat(Couleurs, couleur);
      noStroke();
      rect(200*j+20+i*40,320,40,260);
      push();
      translate(200*j+45+i*40, 570);
      rotate(-HALF_PI);
      textSize(16);
      fill(200);
      stroke(50);
      text(couleur, 0, 0);
      pop();
    }
    fill(0)
    text(j+1+'.',200*j+5,580)
  }
  noLoop();
}

