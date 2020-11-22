class ground{
    constructor(x,y,width,height){
      this.body= Bodies.rectangle(this.x,this.y,this.width,this.height); 
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      
    }

    display(){
     push()
     
    strokeWeight(3);
    stroke("red");
    fill("red");

    rectMode(CENTER);
    rect()
     pop()



    }
}