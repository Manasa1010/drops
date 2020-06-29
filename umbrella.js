class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body=Bodies.circle(x,y,30,options);
        this.diameter=30;
        this.image = loadImage("umbrella.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop();
    }
}