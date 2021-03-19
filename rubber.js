class Rubber
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1,
        }
        this.body=Bodies.circle(x,y,10,option);
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
        fill('blue');
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}