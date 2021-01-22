class ground
{
	constructor(){
		var options ={
			isStatic:true
		}
		this.body = Bodies.rectangle(500,550,1000,15,options);
		this.width = 1200;
		this.height = 15;
		World.add(world,this.body);
	 };
	 display(){
		 var pos =this.body.position;
		 rectMode(CENTER);
		 fill("yellow");
		 rect(pos.x, pos.y, this.width, this.height);
	   }
 }