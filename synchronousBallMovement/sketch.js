var backgroundImage;
var gameState = 0;
var playerCount , database;
var form,player,game;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();


}

function draw(){
  
}