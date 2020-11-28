class Bob {
    constructor(x,y,radius) {
        var opt = {
            isStatic:false,
           // 'resitution':0.004,
            'isStatic': false,
            'density': 0.50
            
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,opt);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("white");
        fill("black")
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}