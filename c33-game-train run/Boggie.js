class Boggie{

    constructor(x,y,width,height){
        var options ={ isStatic: false}

        this.image = loadImage("images/coach.png");
        
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.w = width;
        this.h = height;
      }
      show()
      {
          imagesMode(CENTER);
          //rect(this.body.position.x, this.body.position.y,this.width, this.height);
          image(this.body.position.x, this.body.position.y,this.width, this.height);
      }
    














}