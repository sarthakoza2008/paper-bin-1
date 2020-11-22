class Bin{
    constructor(x,y,width,height){
    
      var options={
          isStatic = true,
          restitution:0.3,
          friction:0.5,
          density:12.
      }
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = 100;
     
      World.add(world,this.body);
    }
    display(){
     push();
     
     rectMode(CENTER);
     rect(790,690,this.width,this.height);
  
  
  
    pop();
    }
  }