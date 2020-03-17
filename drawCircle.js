

function drawCircle(x,y,radius,color) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let circle= new Circle(ctx,x,y,radius,color);
    circle.draw();

}

function Circle(ctx,x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draw= function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
    }
}