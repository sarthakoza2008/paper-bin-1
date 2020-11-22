class waste{
    constructor(x,y,r){
      
       var options={
           isStatic = true,
           restitution:0.3,
           friction:0.5,
           density:12.
       }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.x,this.r/2,options);
      World.add(world,this.body);  
    } 
   
   display(){
    var wastepos = this.body.position
   
        push()
        ellipseMode(CENTER);
        translate(wastepos.x,wastepos.y);
        strokeWeight(3);
        fill("pink");
        ellispe(0,0,this.r,this.r);
        pop()  
   }
   
   };