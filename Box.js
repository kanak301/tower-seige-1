class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("polygon.png");
      World.add(world, this.body);
    }

    score () {
      if(this.visibility<0){
        score++;
      }
    }

    display(){
      var pos =this.body.position;

      imageMode(CENTER);
      //fill("Blue");
      image(this.image,pos.x, pos.y, this.width, this.height);
      //console.log(this.body.speed);
    }
  };

  