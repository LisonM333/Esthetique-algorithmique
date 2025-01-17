let Couleur_sugary= ['#ff0000','#ff7300','#9c2f00','#ff75a1','#ffc4db','#ff039a','#ffc8c2','#a80038','#be85be','#ffcb60']
let Couleur_acid= ['#fff382','#c6ff6b','#95ff00','#cdcd55','#bfdeb4','#f2dc61','#e8f1ff','#4c4cff','#94bfff','#91e051']
let Sets_sugary= [[6, 8, 3, 5], [1, 2, 7, 9], [6, 3, 4, 2], [1, 4, 2, 3], [8, 5, 3, 9], [6, 3, 1, 5], [3, 2, 1, 9], [9, 3, 4, 8], [6, 1, 3, 4], [4, 9, 2, 3]]
let Sets_acid=[[9, 8, 1, 0], [8, 6, 9, 1], [0, 5, 3, 7], [6, 4, 8, 2], [4, 2, 7, 6], [2, 5, 6, 7], [9, 1, 6, 0], [0, 4, 3, 5], [8, 1, 0, 5], [0, 8, 7, 6]]

function setup(){
  createCanvas(Sets_sugary.length*200+50+Sets_acid.length*200, 400+260);
  background(255);
}

function draw() {
  push();
  translate(15, 130);
  rotate(-HALF_PI);
  textFont('Verdana',16);
  fill(10);
  stroke(58, 101, 99);
  strokeWeight(1);
  text('Sugary', 0, 0);
  pop();
  for (let j = 0; j< Sets_sugary.length; j++){
    for (let i = 0; i< Sets_sugary[j].length; i++){
      let couleur = Couleur_sugary[Sets_sugary[j][i]];
      fill(couleur);
      noStroke();
      rect(200*j+40+i*40,20,40,160);
      fill(couleur);
      noStroke();
      rect(200*j+40+i*20,220+30*i,160-40*i,160-40*i);
      fill(couleur);
      noStroke();
      rect (200*j+50, 420+60*i,40,40);
      textFont('Verdana',16);
      fill(58, 101, 99);
      noStroke();
      text(couleur,200*j+100,445+60*i);
    }
    noFill();
    stroke(58, 101, 99);
    strokeWeight(1);
    rect(200*j+40,410,160,240);
    stroke(58, 101, 99);
    strokeWeight(2);
    line(200*j+220, 20, 200*j+220, 650);
    // noFill();
    // stroke(58, 101, 99);
    // strokeWeight(1);
    // rect(200*j+20,10,190,640);
    textFont('Verdana',10);
    fill(0);
    noStroke();
    text(j+1+'.',200*j+25,180);
    // textFont('Verdana',10);
    // fill(0);
    // noStroke();
    // text(j+1+'.',200*j+25,380);
  }
  stroke(224, 238, 232);
  strokeWeight(8);
  line(200*Sets_sugary.length+20,0, 200*Sets_sugary.length+20,660);

  push();
  translate(Sets_sugary.length*200+45, 110);
  rotate(-HALF_PI);
  textFont('Verdana',16);
  fill(10);
  stroke(58, 101, 99);
  strokeWeight(1);
  text('Acid', 0, 0);
  pop();
  for (let j = 0; j< Sets_acid.length; j++){
    for (let i = 0; i< Sets_acid[j].length; i++){
      let couleur = Couleur_acid[Sets_acid[j][i]];
      fill(couleur);
      noStroke();
      rect(Sets_sugary.length*200+50+200*j+20+i*40,20,40,160);
      fill(couleur);
      noStroke();
      rect(Sets_sugary.length*200+50+200*j+20+i*20,220+30*i,160-40*i,160-40*i);
      fill(couleur);
      noStroke();
      rect (Sets_sugary.length*200+50+200*j+30, 420+60*i,40,40);
      textFont('Verdana',16);
      fill(58, 101, 99);
      noStroke();
      text(couleur,Sets_sugary.length*200+50+200*j+80,445+60*i);

    }
    if (j!=Sets_acid.length-1){
      stroke(58, 101, 99);
      strokeWeight(2);
      line(Sets_sugary.length*200+30+200*j+220, 20, Sets_sugary.length*200+30+200*j+220, 650);
    }
    noFill();
    stroke(58, 101, 99);
    strokeWeight(1);
    rect(Sets_sugary.length*200+50+200*j+20,410,160,240);
    textFont('Verdana',10);
    fill(0);
    noStroke();
    text(j+1+'.',Sets_sugary.length*200+50+200*j+5,180);
    // textFont('Verdana',10);
    // fill(0);
    // noStroke();
    // text(j+1+'.',Sets_sugary.length*200+50+200*j+5,380);
    
  }
  
  noLoop();
}
