var car,wall;

var speed,weight;

function setup() 
{
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  
  createCanvas(1500,400);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX = speed;

  wall = createSprite(1485, 200, 30, 300);
  wall.shapeColor=rgb(60,60,60);

  //rightEdge = createSprite(1475,200,10,400);
  //rightEdge.visible = false;
}

function draw() 
{
  background("#73C2FB");  
  
  console.log(car.velocityX);

  //car.collide(rightEdge);

  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor="red";
    }

    if(deformation<180 && deformation>80)
    {
      car.shapeColor = "yellow";
    }

    if(deformation<80)
    {
       car.shapeColor = "green";
    }
  }

  drawSprites();
}