var dataBase;
var background_img;
var gameState = 0;
var form, game, person;
var pathImg, path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12;
var witch, witchCharge, witchAttack;
var soldier, soldierWake, soldierCharge, soldierShoot;
var hunter, hunterAttack;
var arrow;
var ballon;
var ballonGroup, pathsGroup;


function preload(){
  background_img = loadImage("imagens/grass.gif");
 
  pathImg = loadImage("imagens/path.gif");
  
  
   //witch = loadImage("imagens/Blue Witch/B_witch_idle.png");
  //witchCharge = loadImage("imagens/Blue Witch/B_witch_charge.png");
  //witchAttack = loadImage("imagens/Blue Witch/B_witch_attack.png");

//  soldier = loadImage("imagens/Bot Wheel/static idle.png");
  //soldierWake = loadImage("imagens/Bot Wheel/wake.png");
  //soldierCharge = loadImage("imagens/Bot Wheel/charge.png");
  //soldierShoot = loadImage("imagens/Bot Wheel/shoot with FX.png");

  //hunter = loadImage("imagens/Huntress 2/Sprites/Character/Idle.png");
  //hunterAttack = loadImage("imagens/Huntress 2/Sprites/Character/Attack.png");

  //arrow = loadImage("imagens/Huntress 2/Sprites/Arrow/Move.png");

  //ballon = loadImage("imagens/Monsters_Creatures_Fantasy/Flight.png, Take Hit.png");


  

}



function setup() {
  createCanvas(800,400);
      game = new Game();
      game.start()


}

function draw() {
  background(background_img); 

  if (gameState === 0){

    fill("black");
    textSize(35);
    text("Magic Fight", 330, 100);
  }

  if(gameState === 1){
    game.play()
      
    drawSprites();

    
  }



}
