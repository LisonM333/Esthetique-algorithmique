let Couleur_sugary= ['#ff0000','#ff7300','#9c2f00','#ff75a1','#ffc4db','#ff039a','#ffc8c2','#a80038','#be85be','#ffcb60']
let Couleur_acid= ['#fff382','#c6ff6b','#95ff00','#cdcd55','#bfdeb4','#f2dc61','#e8f1ff','#4c4cff','#94bfff','#91e051']


function setup(){
  createCanvas(4000, 1200);
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
  textFont('Verdana',16);
  fill(10);
  stroke(58, 101, 99);
  strokeWeight(1);
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
      textFont('Verdana',16);
      //fill(200);
      fill(224, 238, 232);
      stroke(50);
      //stroke(58, 101, 99);
      strokeWeight(0.5);
      text(couleur, 0, 0);
      pop();

      noStroke();
      rect (200*j+20+20*i,320+30*i,160-40*i,260-40*i);
      push();
      translate(200*j+35+i*20,575-i*10);
      rotate(-HALF_PI);
      textFont('Verdana',10);
      fill(224, 238, 232);
      stroke(50);
      strokeWeight(0.5);
      text(couleur,0,0);
      pop();
    }
    textFont('Verdana',10);
    fill(0);
    text(j+1+'.',200*j+5,280);
    textFont('Verdana',10);
    fill(0);
    text(j+1+'.',200*j+5,580);
  }
  stroke(224, 238, 232);
  strokeWeight(8);
  line(0,600,4000,600);

  push();
  translate(15, 760);
  rotate(-HALF_PI);
  textFont('Verdana',16);
  fill(10);
  stroke(58, 101, 99);
  strokeWeight(1);
  text('Acid', 0, 0);
  pop();
  for (let j = 0; j< 20; j++){
    let Couleurs = [...Couleur_acid];
    for (let i = 0; i< 4; i++){
      let couleur = random(Couleurs);
      fill(couleur);
      Couleurs = noRepeat(Couleurs, couleur);
      noStroke();
      rect(200*j+20+i*40,620,40,260);
      push();
      translate(200*j+45+i*40, 870);
      rotate(-HALF_PI);
      textFont('Verdana',16);
      //fill(200);
      fill(224, 238, 232);
      stroke(50);
      strokeWeight(0.5);
      text(couleur, 0, 0);
      pop();

      noStroke();
      rect (200*j+20+20*i,920+30*i,160-40*i,260-40*i);
      push();
      translate(200*j+35+i*20,1175-i*10);
      rotate(-HALF_PI);
      textFont('Verdana',10);
      fill(224, 238, 232);
      stroke(50);
      strokeWeight(0.5);
      text(couleur,0,0);
      pop();
    }
    textFont('Verdana',10);
    fill(0);
    text(j+1+'.',200*j+5,880);
    textFont('Verdana',10);
    fill(0);
    text(j+1+'.',200*j+5,1180);
  }
  noLoop();
}

const button = document.getElementById('reset');

button.addEventListener('click', () => {
  location.reload();
});
