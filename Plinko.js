class Plinko{
   
        constructor(x,y,radius) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x,y,radius,options);
          this.radius = radius;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("white");
          rect(pos.x, pos.y, this.width, this.height);
        }
      }
    

