class Iron
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 1,
            'density': 0.8,
        }
        this.body=Bodies.rectangle(x,y,70,70,option);
        World.add(world,this.body);
        
        this.width=80;
        this.height=80;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill('red');
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}