let Couleur_sugary= ['#ff0000','#ff7300','#9c2f00','#ff75a1','#ffc4db','#ff039a','#ffc8c2','#a80038','#be85be','#ffcb60']
let Couleur_acid= ['#fff382','#c6ff6b','#95ff00','#cdcd55','#bfdeb4','#f2dc61','#e8f1ff','#4c4cff','#94bfff','#91e051']
let Sets_sugary= [[6, 8, 3, 5], [1, 2, 7, 9], [6, 3, 4, 2], [1, 4, 2, 3], [8, 5, 3, 9], [6, 3, 1, 5], [3, 2, 1, 9], [9, 3, 4, 8], [6, 1, 3, 4], [4, 9, 2, 3]]
let Sets_acid=[[9, 8, 1, 0], [8, 6, 9, 1], [0, 5, 3, 7], [6, 4, 8, 2], [4, 2, 7, 6], [2, 5, 6, 7], [9, 1, 6, 0], [0, 4, 3, 5], [8, 1, 0, 5], [0, 8, 7, 6]]

function setup(){
  createCanvas(Sets_sugary.length*200+10+Sets_acid.length*200, 400);
  background(255);
}

function draw() {
  push();
  translate(15, 130);
  rotate(-HALF_PI);
  textSize(16);
  fill(10);
  stroke(50);
  text('Sugary', 0, 0);
  pop();
  for (let j = 0; j< Sets_sugary.length; j++){
    for (let i = 0; i< Sets_sugary[j].length; i++){
      let couleur = Couleur_sugary[Sets_sugary[j][i]];
      fill(couleur);
      noStroke();
      rect(200*j+20+i*40,20,40,160);
    }
    fill(0)
    text(j+1+'.',200*j+5,180)
  }
  push();
  translate(Sets_sugary.length*200+25, 110);
  rotate(-HALF_PI);
  textSize(16);
  fill(10);
  stroke(50);
  text('Acid', 0, 0);
  pop();
  for (let j = 0; j< Sets_acid.length; j++){
    for (let i = 0; i< Sets_acid[j].length; i++){
      let couleur = Couleur_acid[Sets_acid[j][i]];
      fill(couleur);
      noStroke();
      rect(Sets_sugary.length*200+10+200*j+20+i*40,20,40,160);
    }
    fill(0)
    text(j+1+'.',Sets_sugary.length*200+10+200*j+5,180)
  }
///////////////////////////////////////////////////////////////////
  for (let j = 0; j< Sets_sugary.length; j++){
    for (let i = 0; i< Sets_sugary[j].length; i++){
      let couleur = Couleur_sugary[Sets_sugary[j][i]];
      fill(couleur);
      noStroke();
      rect(200*j+20+i*20,220+30*i,160-40*i,160-40*i);
    }
    fill(0)
    text(j+1+'.',200*j+5,380)
  }
  for (let j = 0; j< Sets_acid.length; j++){
    for (let i = 0; i< Sets_acid[j].length; i++){
      let couleur = Couleur_acid[Sets_acid[j][i]];
      fill(couleur);
      noStroke();
      rect(Sets_sugary.length*200+10+200*j+20+i*20,220+30*i,160-40*i,160-40*i);
    }
    fill(0)
    text(j+1+'.',Sets_sugary.length*200+10+200*j+5,380)
  }
  noLoop();



  noLoop();
}



// for (let i=0;i<4; i++){
//   fill(couleurs[i]);
// noStroke();
// rect (20+20*i,20+30*i,160-40*i,160-40*i);
// }