class Rock{

    constructor(x,y,width,height){
        var options ={ isStatic: true}

        this.rock = loadImage = ("images/rock.png");
        this.rock1 = loadImages = ("images/rock1.png");
        
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.w = width;
        this.h = height;
      }
      show()
      {
          imageMode(CENTER);
         // rect(this.body.position.x, this.body.position.y,this.width, this.height);
      }




}