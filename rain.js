class Rain{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,3,options);
        this.diameter=3;
        World.add(world,this.body);
    }
    
        update(){
           //if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
            
       // }
    }
    display(){
        var pos=this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.diameter);
        pop();
    }
}