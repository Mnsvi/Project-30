// defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// defining variables 
var bob1, bob2, bob3, bob4, bob5; 
var roof; 
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function setup() {

	// creating canvas 
	createCanvas(800, 700);

	// creating engine and adding it to world 
	engine = Engine.create();
	world = engine.world;
	
	// giving value to diameter
	bobDiameter = 70;

	//Create the Bodies Here.
	bob1 = new Bob(200,400,35);
	bob2 = new Bob(275,400,35);
	bob3 = new Bob(350,400,35);
	bob4 = new Bob(425,400,35);
	bob5 = new Bob(500,400,35);
	roof = new Roof(370,100,500,30);
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

	// running engine 
	Engine.run(engine);

	// creating ground
	ground = Bodies.rectangle(width/2, 500, width, 10,{
		isStatic: true});
		World.add(world, ground);
}

function draw() {

	// rect
	rectMode(CENTER);

	// giving background color 
	background("yellow");

	// displaying objects 
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}