class Rubber
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1,
        }
        this.body=Bodies.circle(x,y,40,option);
        this.radius=40;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill('blue');
        rotate(angle);
        // circleMode(CENTER);
        ellipse(100,100,this.radius,this.radius);
        pop();     
    }
}