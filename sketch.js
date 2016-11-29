//katamari game redo for final project
//rabbit edition
var bunny;
var carrot;
var carrotImg;
var beet;
var beetImg;
var lettuce;
var lettuceImg;
var bug;
var bugImg;
var obstacles;
var collectables;
var win;
var vegetable = 0;

function preload()
{
  bunny = loadAnimation("assets/bunny_001.png", "assets/bunny_002.png");
  carrotImg = loadImage("assets/carrot.png");
  beetImg = loadImage("assets/beet.png");
  lettuceImg = loadImage("assets/lettuce.png");
  bugImg = loadImage("assets/bug.png");
  win = loadImage("assets/win.png");
}

function setup()
{
  createCanvas(1000, 600);

  //create the bunny sprite
  bunny = createSprite(200, 200, 10, 10);
  bunny.addAnimation("run", "assets/bunny_001.png", "assets/bunny_002.png");

  //create the groups for the obstacles and the collectables
  obstacles = new Group();
  collectables = new Group();

  // adds bugs sprites
  for (var i = 0; i < 4; i++) //4 is the number of obstacles
  {
    bug = createSprite(random(0, width), random(0, height), 5, 5);
    bug.addImage(bugImg);
    obstacles.add(bug);
  }

  for (var i = 0; i < 4; i++) //10 is number of vegetables
  {
    carrot = createSprite (random(0, width), random(0, height), 3, 3);
    carrot.addImage(carrotImg);
    collectables.add(carrot);

    lettuce = createSprite (random(0, width), random(0, height), 3, 3);
    lettuce.addImage(lettuceImg);
    collectables.add(lettuce);

    beet = createSprite (random(0, width), random(0, height));
    beet.addImage(beetImg);
    collectables.add(beet);
  }
}

function draw()
{
  background(143, 177, 133);
  bunny.velocity.x = (mouseX-bunny.position.x)/10;
  bunny.velocity.y = (mouseY-bunny.position.y)/10;

  // //bunny collides against things inside the group obstacles
  bunny.collide(obstacles);
  // //collects vegetables
  bunny.overlap(collectables, collect);

  if(vegetable == 12)
  {
    image(win);
  }

  drawSprites();
}

function collect(bunny, collected)
{
  vegetable += 1;
  println("vegetable");

  bunny.scale+= 0.04;
  collected.remove();
}
