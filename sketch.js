var mario;
var platformGroup;

function preload()
{
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var platform;
  var distanceX = 0;
  var gap = random([100, 50, 90, 40]);
  mario = new Player();
  platformGroup = new Group();

  for(var i = 0; i<40; i++)
  {
    platform = new Platform(distanceX);
    distanceX = distanceX + platform.sptw + gap;
    platformGroup.add(platform.spt)
  }
}

function draw() 
{
  background("skyblue"); 
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  translate(-mario.spt.x + width/2, 0);
  if(keyDown("right"))
  {
    mario.moveForward();
  }
  if(keyDown("left"))
  {
    mario.moveBackward();
  }
  if(keyDown("up"))
  {
    mario.jump();
  }
  drawSprites();
}

