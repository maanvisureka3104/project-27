class Sand
{ constructor(x,y)
    {
        var option={
            'restitution' : 1.3,
            'friction': 5,
            'density': 1,
        }
        this.body=Bodies.circle(x,y,20,option);
        
        this.x=x;
        this.y=y;
        this.radius=20
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
        rectMode(CENTER);
        ellipse(this.x,this.y,this.radius,this.radius);
        pop();     
    }
}