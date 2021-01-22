class Paper{
  constructor(){
     var options = {
        isStatic : true
        restitution:0.3,
        friction:0.5,
        density:1.2,
     }
    this.body = bodies.rectangle(250,540,20,options)
    this.width =30;
    this.image = loadImage("sprites/paper.png");
  }
  display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       fill("white");
       rotate(angle);
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,33,33);





  }


}