class Sand
{ constructor(x,y)
    {
        var option={
            'restitution' : 1.3,
            'friction': 5,
            'density': 1,
        }
        this.body=Bodies.circle(x,y,5,option);
        World.add(world,this.body);
        
        this.width=20;
        this.height=20;
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
        rect(0,0,this.width,this.height);
        pop();     
    }
}