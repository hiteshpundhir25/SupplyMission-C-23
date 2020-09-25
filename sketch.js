var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var edge1,edge2,edge3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	edge1 = createSprite(width/2,650,200,20);
	edge1.shapeColor=color("red");

	edge2 = createSprite(290,610,20,100);
	edge2.shapeColor=color("red");

	edge3 = createSprite(500,610,20,100);
	edge3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true,friction:1});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	edge1 = Bodies.rectangle(width/2,635,200,20,{isStatic:true});
	World.add(world,edge1);

	edge2 = Bodies.rectangle(290,610,20,100,{isStatic:true});
	World.add(world,edge2);

	edge3 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,edge3);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  keyPressed();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
	}
 }




