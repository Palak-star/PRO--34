
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Mouse, bob1, rope1;
var canvas, canvasmouse;

function preload()
{
	
}

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

      
      bob1 = new Pendulum (100,200,20);
      bob2 = new Pendulum (40,200,20);
      bob3 = new Pendulum (30,200,20);
      bob4 = new Pendulum (20,200,20);
      bob5 = new Pendulum (50,200,20);

      rope1 = new Sling(bob1.body,{x:200,y:100});
      rope2 = new Sling(bob2.body,{x:300,y:100});
      rope3 = new Sling(bob3.body,{x:400,y:100});
      rope4 = new Sling(bob4.body,{x:500,y:100});
      rope5 = new Sling(bob5.body,{x:600,y:100});


	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}


function mouseDragged() {
  Matter.body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}

